from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def index():
    return """
    <html>
        <head>
            <title>加法计算器</title>
            <style>
                body { font-family: Arial; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f0f2f5; }
                .card { background: white; padding: 40px; border-radius: 12px; box-shadow: 0 2px 12px rgba(0,0,0,0.1); text-align: center; }
                input { padding: 10px; font-size: 18px; width: 80px; margin: 0 10px; border: 1px solid #ddd; border-radius: 6px; }
                button { padding: 10px 24px; font-size: 18px; background: #4f8ef7; color: white; border: none; border-radius: 6px; cursor: pointer; margin-top: 20px; }
                button:hover { background: #3a7bd5; }
                #result { font-size: 28px; font-weight: bold; margin-top: 24px; color: #4f8ef7; }
            </style>
        </head>
        <body>
            <div class="card">
                <h2>加法计算器</h2>
                <input type="number" id="a" placeholder="a" />
                +
                <input type="number" id="b" placeholder="b" />
                <br/>
                <button onclick="calculate()">计算</button>
                <div id="result"></div>
            </div>
            <script>
                async function calculate() {
                    const a = document.getElementById('a').value;
                    const b = document.getElementById('b').value;
                    const res = await fetch(`/add?a=${a}&b=${b}`);
                    const data = await res.json();
                    document.getElementById('result').innerText = '= ' + data.result;
                }
            </script>
        </body>
    </html>
    """

@app.get("/add")
def add(a: int, b: int):
    return {"result": a + b}