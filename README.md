<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Art Deco Website</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Montserrat', sans-serif;
            background: linear-gradient(135deg, #f5f0e6 0%, #e8e0d2 100%);
            color: #3a2e24;
            line-height: 1.6;
            background-image: 
                radial-gradient(circle at 10% 20%, rgba(181, 152, 107, 0.1) 0%, transparent 20%),
                radial-gradient(circle at 90% 80%, rgba(181, 152, 107, 0.1) 0%, transparent 20%);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            padding: 40px 20px;
            border-bottom: 3px double #b5986b;
            margin-bottom: 40px;
            position: relative;
        }
        
        h1 {
            font-family: 'Playfair Display', serif;
            font-size: 3.5rem;
            color: #8b5a2b;
            margin-bottom: 15px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
        
        .subtitle {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: #b5986b;
            font-weight: 300;
            margin-bottom: 20px;
        }
        
        .decoration {
            width: 100px;
            height: 3px;
            background: linear-gradient(to right, transparent, #b5986b, transparent);
            margin: 20px auto;
        }
        
        .content {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-bottom: 40px;
        }
        
        .card {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid #d4c7b0;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 5px 15px rgba(139, 90, 43, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(139, 90, 43, 0.2);
        }
        
        .card h2 {
            font-family: 'Playfair Display', serif;
            color: #8b5a2b;
            margin-bottom: 15px;
            font-size: 1.8rem;
            border-bottom: 2px solid #b5986b;
            padding-bottom: 10px;
        }
        
        .card p {
            margin-bottom: 15px;
            color: #5d4037;
        }
        
        .ornament {
            text-align: center;
            margin: 30px 0;
            font-size: 2rem;
            color: #b5986b;
        }
        
        footer {
            text-align: center;
            padding: 30px;
            border-top: 3px double #b5986b;
            margin-top: 40px;
            font-size: 0.9rem;
            color: #7d5e3d;
        }
        
        .gold-border {
            border: 2px solid #b5986b;
            padding: 20px;
            margin: 20px 0;
            background: rgba(245, 240, 230, 0.7);
        }
        
        @media (max-width: 768px) {
            h1 {
                font-size: 2.5rem;
            }
            
            .subtitle {
                font-size: 1.2rem;
            }
            
            .content {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Art Deco</h1>
            <div class="subtitle">Elegant Design & Timeless Beauty</div>
            <div class="decoration"></div>
            <div class="ornament">✦</div>
        </header>
        
        <div class="gold-border">
            <p>Welcome to this Art Deco inspired website. The Art Deco movement, which flourished in the 1920s and 1930s, is characterized by bold geometric shapes, rich colors, and luxurious designs.</p>
        </div>
        
        <div class="content">
            <div class="card">
                <h2>Geometric Patterns</h2>
                <p>Art Deco features bold geometric patterns including zigzags, chevrons, and sunburst motifs that create dynamic visual interest.</p>
                <p>These patterns are often symmetrical and emphasize horizontal and vertical lines.</p>
            </div>
            
            <div class="card">
                <h2>Rich Colors</h2>
                <p>The style is known for its use of rich, saturated colors like deep blues, emerald greens, and golds.</p>
                <p>Black and white are also commonly used to create dramatic contrast.</p>
            </div>
            
            <div class="card">
                <h2>Luxurious Materials</h2>
                <p>Art Deco design often incorporates luxurious materials such as marble, chrome, and exotic woods.</p>
                <p>The movement celebrated modernity while maintaining elegance and sophistication.</p>
            </div>
        </div>
        
        <div class="ornament">✦</div>
        
        <footer>
            <p>Art Deco Design • Inspired by the golden age of design</p>
            <p>&copy; 2023 Art Deco Website. All rights reserved.</p>
        </footer>
    </div>
</body>
</html>
