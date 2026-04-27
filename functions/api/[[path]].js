// Cloudflare Pages Functions - API Handler
export async function onRequest(context) {
    const { request, env } = context;
    const url = new URL(request.url);
    const path = url.pathname;

    // CORS headers
    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // GET /api/results - ดึงข้อมูลทั้งหมด
        if (path === '/api/results' && request.method === 'GET') {
            const { results } = await env.DB.prepare(
                'SELECT id, name, scores, top_gift, timestamp FROM results ORDER BY timestamp DESC'
            ).all();

            // Parse scores from JSON string
            const parsedResults = results.map(r => ({
                ...r,
                scores: JSON.parse(r.scores),
                topGift: r.top_gift,
                timestamp: r.timestamp
            }));

            return new Response(JSON.stringify(parsedResults), {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        // POST /api/save - บันทึกข้อมูลใหม่
        if (path === '/api/save' && request.method === 'POST') {
            const data = await request.json();
            
            if (!data.name || !data.scores || !data.topGift) {
                return new Response(JSON.stringify({ 
                    success: false, 
                    error: 'Missing required fields' 
                }), {
                    status: 400,
                    headers: { ...corsHeaders, 'Content-Type': 'application/json' }
                });
            }

            // Insert into D1
            const result = await env.DB.prepare(
                'INSERT INTO results (name, scores, top_gift) VALUES (?, ?, ?)'
            ).bind(
                data.name,
                JSON.stringify(data.scores),
                data.topGift
            ).run();

            return new Response(JSON.stringify({ 
                success: true,
                id: result.meta.last_row_id
            }), {
                headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
        }

        // 404 for unknown routes
        return new Response(JSON.stringify({ error: 'Not Found' }), {
            status: 404,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });

    } catch (error) {
        console.error('API Error:', error);
        return new Response(JSON.stringify({ 
            success: false, 
            error: error.message 
        }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
}
