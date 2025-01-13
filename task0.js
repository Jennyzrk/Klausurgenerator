class task0 extends taskBase {
    constructor() {
        super();
        math.import({
            sgn: para => math.sign(para),
            u: para => (1 + math.sign(para)) / 2,
            ramp: para => para * (1 + math.sign(para)) / 2,
            rect: para => (1 + math.sign(para + 1 / 2)) / 2 - (1 + math.sign(para - 1 / 2)) / 2,
            r: (para, tau) => (1 + math.sign(para / tau + 1 / 2)) / 2 - (1 + math.sign(para / tau - 1 / 2)) / 2,
            u: para => (para >= 0 ? 1 : 0), 
            ramp: para => (para >= 0 ? para : 0)
        });
    }
    generateRandomExpressionSigma(useLatex = false) {
        const validShifts1 = [+3, +2, +1];
        const validShifts2 = [-1, -2, -3];
        const validShifts3 = [-4, -5, -6];
        
        const shift1 = validShifts1[Math.floor(Math.random() * validShifts1.length)];
        const shift2 = validShifts2[Math.floor(Math.random() * validShifts2.length)];
        const shift3 = validShifts3[Math.floor(Math.random() * validShifts3.length)];

        const formatShift = shift => (shift > 0 ? `+${shift}` : `${shift}`);

        const randomAmplitude = () => {
            const amplitudes = [0.5, 1.0, 1.5, 2];
            return amplitudes[Math.floor(Math.random() * amplitudes.length)];
        };
    
        let expressionParts = [];
      
        const amplitude1 = randomAmplitude();
        const amplitude2 = randomAmplitude();
        const amplitude3 = randomAmplitude();

        const ramps = [false, false, false];

        // Setze mindestens eine Rampe auf true
         ramps[Math.floor(Math.random() * ramps.length)] = true;

        if (Math.random() < 0.5) {
        // 50% Chance, eine weitere Rampe auf true zu setzen
        let randomIndex;
        do {
        randomIndex = Math.floor(Math.random() * ramps.length);
    } while (ramps[randomIndex]); 

    ramps[randomIndex] = true; 
    }
    console.log(ramps); // Beispielausgabe: [true, false, true]

        const isRamp1 = ramps[0];
        const isRamp2 = ramps[1];
        const isRamp3 = ramps[2];
    
        if (isRamp1) {
            if (useLatex) {
                expressionParts.push(
                    `${amplitude1} \\cdot \\sigma(t ${formatShift(shift1)}) \\cdot (t ${formatShift(shift1)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude1} * u(t${formatShift(shift1)}) * (t${formatShift(shift1)})`
                );
            }
        } else {
            if (useLatex) {
                expressionParts.push(
                    `${amplitude1} \\cdot \\sigma(t ${formatShift(shift1)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude1} * u(t${formatShift(shift1)})`
                );
            }
        }
        
        
        // Zweite Komponente
        if (isRamp2) {
           
            if (useLatex) {
                expressionParts.push(
                    `${amplitude2} \\cdot \\sigma(t ${formatShift(shift2)}) \\cdot (t ${formatShift(shift2)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude2} * u(t${formatShift(shift2)}) * (t${formatShift(shift2)})`
                );
            }
        } else {
            if (useLatex) {
                expressionParts.push(
                    `${amplitude2} \\cdot \\sigma(t ${formatShift(shift2)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude2} * u(t${formatShift(shift2)})`
                );
            }
        }
        
        // Dritte Komponente
    
        
        if (isRamp3) {
            if (useLatex) {
                expressionParts.push(
                    `${amplitude3} \\cdot \\sigma(t ${formatShift(shift3)}) \\cdot (t ${formatShift(shift3)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude3} * u(t${formatShift(shift3)}) * (t${formatShift(shift3)})`
                );
            }
        } else {
            if (useLatex) {
                expressionParts.push(
                    `${amplitude3} \\cdot \\sigma(t ${formatShift(shift3)})`
                );
            } else {
                expressionParts.push(
                    `${amplitude3} * u(t${formatShift(shift3)})`
                );
            }
        }
        
    
        
let operator1, operator2;

// Zufällige Entscheidung, 50% Chance ob beide '-' sind oder nur einer
if (Math.random() < 0.5) {

    operator1 = '-';
    operator2 = '-';
} else {
    // Andernfalls: genau ein '-' und ein '+'
    operator1 = '-';
    operator2 = '+';
    if (Math.random() < 0.5) {
        // Tausche die Position von '+' und '-'
        [operator1, operator2] = [operator2, operator1];
    }
}

    
        const expression = useLatex
            ? `\\[ y = ${expressionParts[0]} ${operator1} ${expressionParts[1]} ${operator2} ${expressionParts[2]} \\]`
            : `${expressionParts[0]} ${operator1} ${expressionParts[1]} ${operator2} ${expressionParts[2]}`;
    
        console.log("Generated Expression:", expression);
        return expression;
    }
    
    

    generateRandomExpressionTrigo(useLatex = false) {
        const signals = ['sin', 'cos', 'exp'];
        const randomSignal = signals[Math.floor(Math.random() * signals.length)];
        const validShift1 = [(-3), (-2), (-1)];
        const validShift2 = [1, 2, 3];
        const validShift3 = [4, 5, 6];
    
        const randomAmplitude = () => Math.floor(Math.random() * 5) + 1; 
    
        let expressionParts = []; 
    
        const amplitude1 = randomAmplitude();
        const amplitude2 = randomAmplitude();
    
        const shift1 = validShift1[Math.floor(Math.random() * validShift1.length)];
        const shift2 = validShift2[Math.floor(Math.random() * validShift2.length)];
        const shift3 = validShift3[Math.floor(Math.random() * validShift3.length)];
    
        // Formatieren von Verschiebungen 
        const formatShift = shift => (shift < 0 ? `+${Math.abs(shift)}` : `-${shift}`);
    
        const argument = `${(Math.floor(Math.random() * 3) + 1)} * t`;
    
       
        if (randomSignal === 'sin' || randomSignal === 'cos') {
            expressionParts.push(
                useLatex
                    ? `${amplitude1} \\cdot \\${randomSignal}(${argument}) \\cdot \\sigma(t ${formatShift(shift1)})`
                    : `${amplitude1} * ${randomSignal}(${argument}) * u(t ${formatShift(shift1)} * pi)`
            );
        } else if (randomSignal === 'exp') {
            const expVariant = Math.random() < 0.5 ? 't' : '-t';
        
            // 50% Chance für eine Spiegelung an der x-Achse
            const amplitudeWithReflection = Math.random() < 0.5 ? amplitude1 : -amplitude1;
        
            expressionParts.push(
                useLatex
                    ? `${amplitudeWithReflection} \\cdot e^{${expVariant}} \\cdot \\sigma(t ${formatShift(shift1)})`
                    : `${amplitudeWithReflection} * exp(${expVariant}) * u(t ${formatShift(shift1)})`
            );
        }
        
    
        if (Math.random() < 0.5) {

        if (randomSignal === 'exp') {
            expressionParts.push(
                useLatex
                    ? `${amplitude2} \\cdot \\sigma(t ${formatShift(shift2)}) \\cdot (t ${formatShift(shift2)})`
                    : `${amplitude2} * u(t ${formatShift(shift2)}) * (t ${formatShift(shift2)})`
            );
        } else {
            expressionParts.push(
                useLatex
                    ? `${amplitude1} \\cdot \\${randomSignal}(${argument}) \\cdot \\sigma(t ${formatShift(shift2)})`
                    : `${amplitude1} * ${randomSignal}(${argument}) * u(t ${formatShift(shift2)} * pi)`
            );
            if (Math.random() < 0.5) {

                expressionParts.push(
                    useLatex
                        ? `${amplitude2} \\cdot \\${randomSignal}(${argument}) \\cdot \\sigma(t ${formatShift(shift3)})`
                        : `${amplitude2} * ${randomSignal}(${argument}) * u(t ${formatShift(shift3)} * pi)`
                );
            }
        }
        }
    const operator1 = '-';
    const operator2 = Math.random() < 0.5 ? '+' : '-';

    if (expressionParts.length === 1) {
        return useLatex
            ? `\\[ y = ${expressionParts[0]} \\]`
            : `${expressionParts[0]}`;
    } else {
        const joinedExpression = expressionParts
            .map((part, index) => (index === 0 ? part : `${index === 1 ? operator1 : operator2} ${part}`))
            .join(' ');

        return useLatex
            ? `\\[ y = ${joinedExpression} \\]`
            : `${joinedExpression}`;
    
        }
    }
    


  

    plotEmptyGrid(canvasId, signalType) {
        const canvas = document.getElementById(canvasId);
        canvas.width = 400;
        canvas.height = 400;
    
        const ctx = canvas.getContext('2d');
    
        const yAxisRange = signalType === 'trigo' ? { min: -10, max: 10 } : { min: -10, max: 20 };
        const xAxisTitle = signalType === 'trigo' ? 't in [π]' : 't';
    
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{ data: [] }] 
            },
            options: {
                scales: {
                    x: {
                        type: 'linear',
                        min: -3,
                        max: 8,
                        grid: {
                            color: context => (context.tick.value === 0 ? '#000000' : '#DDDDDD'),
                            lineWidth: context => (context.tick.value === 0 ? 3 : 1)
                        },
                        ticks: {
                            stepSize: 1,
                            color: '#000000',
                            font: { size: 12 }
                        },
                        title: {
                            display: true,
                            text: xAxisTitle,
                            font: { size: 14 },
                            color: '#000000'
                        }
                    },
                    y: {
                        type: 'linear',
                        min: yAxisRange.min,
                        max: yAxisRange.max,
                        grid: {
                            color: context => (context.tick.value === 0 ? '#000000' : '#DDDDDD'),
                            lineWidth: context => (context.tick.value === 0 ? 3 : 1)
                        },
                        ticks: {
                            stepSize: 1,
                            color: '#000000',
                            font: { size: 12 }
                        },
                        title: {
                            display: true,
                            text: 'y(t)',
                            font: { size: 14 },
                            color: '#000000'
                        }
                    }
                },
                plugins: { legend: { display: false } }
            },
            plugins: [{
                id: 'drawArrows',
                afterDraw(chart) {
                    const ctx = chart.ctx;
                    const chartArea = chart.chartArea;
    
                    ctx.save();
    
                    const xArrowEndX = chartArea.right;
                    const xArrowY = chart.scales.y.getPixelForValue(0); // Pfeil bei y = 0
                    ctx.beginPath();
                    ctx.moveTo(xArrowEndX + 8, xArrowY);
                    ctx.lineTo(xArrowEndX, xArrowY - 4);
                    ctx.lineTo(xArrowEndX, xArrowY + 4);
                    ctx.closePath();
                    ctx.fillStyle = '#000000';
                    ctx.fill();
    
                    const yArrowEndY = chartArea.top;
                    const yArrowX = chart.scales.x.getPixelForValue(0); // Pfeil bei x = 0
                    ctx.beginPath();
                    ctx.moveTo(yArrowX, yArrowEndY - 10);
                    ctx.lineTo(yArrowX - 4, yArrowEndY);
                    ctx.lineTo(yArrowX + 4, yArrowEndY);
                    ctx.closePath();
                    ctx.fillStyle = '#000000';
                    ctx.fill();
    
                    ctx.restore();
                }
            }]
        });
    }
    

    

generateFunctionData(expression, min = -3, max = 8, step = 0.01, type = 'sigma') {
    const dataPoints = [];
    const expr = math.compile(expression); // Funktion analysieren

    // Iteriere durch die Werte von t im angegebenen Bereich
    for (let t = min; t <= max; t += step) {
        const result = expr.evaluate({ t: t }); // Funktionswert berechnen
        if (!isNaN(result) && isFinite(result)) {
            
            dataPoints.push({ x: t, y: result });
        }
    }

    // Optional bei Sprungfunktion
    if (max % step !== 0) {
        const lastResult = expr.evaluate({ t: max });
        if (!isNaN(lastResult) && isFinite(lastResult)) {
            dataPoints.push({ x: max, y: lastResult });
        }
    }

    return dataPoints;
}





generateChart(expression, canvasId, type) {
    const canvas = document.getElementById(canvasId);
    const ctx = canvas.getContext('2d');

    let dataPoints;
    if (type === 'sigma') {
        
        dataPoints = this.generateFunctionData(expression, -3, 8, 0.01, 'sigma');
    } else if (type === 'trigo') {
       
        dataPoints = this.generateFunctionData(expression, -3 * Math.PI, 8 * Math.PI, 0.01, 'trigo');
    } else {
        console.error("Unknown Expression Type:", type);
        return;
    }

    // Dynamische Skalierung für y-Achse
    const yValues = dataPoints.map(point => point.y);
    const maxAmplitude = Math.max(...yValues);
    const minAmplitude = Math.min(...yValues);
    const dynamicMinY = Math.floor(minAmplitude - 1);
    const dynamicMaxY = Math.ceil(maxAmplitude + 1);

    new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Signalverlauf',
                data: dataPoints,
                borderColor: 'rgba(0, 123, 255, 1)',
                borderWidth: 2,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: type === 'trigo' ? 0.4 : 0 // Glättung nur für trigonometrische Funktionen
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                    min: type === 'trigo' ? -3 * Math.PI : -3, 
                    max: type === 'trigo' ? 8 * Math.PI : 8,
                    grid: {
                        drawBorder: true,
                        borderWidth: 2,
                        borderColor: '#000000',
                        color: '#DDDDDD',
                        lineWidth: 1
                    },
                    ticks: {
                        stepSize: type === 'trigo' ? Math.PI : 1,
                        callback: (value) =>
                            type === 'trigo' ? `${(value / Math.PI).toFixed(1)}π` : value // Titel der y-Achse
                    },
                    title: {
                        display: true,
                        text: 't', 
                        font: { size: 14 }
                    }
                },
                y: {
                    beginAtZero: false,
                    min: dynamicMinY,
                    max: dynamicMaxY,
                    grid: {
                        drawBorder: true,
                        borderWidth: 2,
                        borderColor: '#000000',
                        color: '#DDDDDD',
                        lineWidth: 1
                    },
                    ticks: { stepSize: 1 },
                    title: {
                        display: true,
                        text: 'y(t)',
                        font: { size: 14 }
                    }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
}


convertToLatex(expression) {
    return expression
        .replaceAll("σ", "\\sigma") 
        .replaceAll("*", "\\cdot") 
        .replaceAll("pi", "\\pi")
        .replaceAll("exp", "e^{") 
        .replace(/\./g, ","); 
}



generate() {
    let html = `<h4> Signaltypen und Signalverläufe</h4>`;
    const generateRandomTaskType = () => Math.round(Math.random());

    // Zufällige Entscheidung Signaltyp
    const taskTypeA = generateRandomTaskType();
    const taskTypeB = taskTypeA; 
    const taskTypeC = taskTypeA === 0 ? 1 : 0; // c ist immer ungleich a

    // Aufgabenstellung (a)
    let task0PartA;
    if (taskTypeA === 0) {
        const sigmaExpressionA = this.generateRandomExpressionSigma(false);
        task0PartA = `<h3>(a) (6 Punkte) Stellen Sie für die folgende Grafik den Ausdruck mit Elementarsignalen auf:</h3>
                 <canvas id="chartA" width="800" height="400"></canvas>
                 <div style="margin-top: 30px; text-align: center;">
                          Ausdruck:
                          _________________________________________________________
                      </div>`;
                      setTimeout(() => this.generateChart(sigmaExpressionA, 'chartA', 'sigma'), 100); 
    } else {
        const expressionA = this.generateRandomExpressionSigma(true);
      
        task0PartA = `<h3>(a) (8 Punkte) Zeichnen Sie den Signalverlauf für folgenden Ausdruck:</h3>
                      ${expressionA}
                     </div>Bitte markiere eindeutig, welches bewertet werden soll.</div></div>
                      <div style="display: flex; justify-content: space-between;">
                          <div style="flex: 1; margin-right: 10px;">
                              <canvas id="chartA" width="400" height="300"></canvas>
                          </div>
                          <div style="flex: 1; margin-left: 10px;">
                              <canvas id="chartB" width="400" height="300"></canvas>
                          </div>
                      </div>`;
        setTimeout(() => this.plotEmptyGrid('chartA', 'sigma'), 100);
        setTimeout(() => this.plotEmptyGrid('chartB', 'sigma'), 100); 
    }

    
    let task0PartB;
    if (taskTypeB === 0) {
        const trigoExpressionA = this.generateRandomExpressionTrigo(false);
        task0PartB = `<h3>(b) (6 Punkte) Stellen Sie für die folgende Grafik den Ausdruck mit Elementarsignalen auf:</h3>
                     <canvas id="chartC" width="800" height="400"></canvas>
                     <div style="margin-top: 30px; text-align: center;">
                              Ausdruck:
                              _________________________________________________________
                          </div>`;
        setTimeout(() => this.generateChart(trigoExpressionA, 'chartC', 'trigo'), 100); 
    } else {
        const expressionB = this.generateRandomExpressionTrigo(true);
      
    
        task0PartB = `<h3>(b) (8 Punkte) Zeichnen Sie den Signalverlauf für folgenden Ausdruck:</h3>
                      ${expressionB}
                    </div>Bitte markiere eindeutig, welches bewertet werden soll.</div></div>
                      <div style="display: flex; justify-content: space-between;">
                          <div style="flex: 1; margin-right: 10px;">
                              <canvas id="chartC" width="400" height="300"></canvas>
                          </div>
                          <div style="flex: 1; margin-left: 10px;">
                              <canvas id="chartD" width="400" height="300"></canvas>
                          </div>
                      </div>`;
        setTimeout(() => this.plotEmptyGrid('chartC', 'trigo'), 100); 
        setTimeout(() => this.plotEmptyGrid('chartD', 'trigo'), 100);
    }
    
 
    let task0PartC;
   

    if (taskTypeC === 0) {
        // Zufällige Wahl zwischen Sigma und Trigonometrischer Funktion
        const expressionC = Math.random() < 0.5 
    ? this.generateRandomExpressionSigma(false) 
    : this.generateRandomExpressionTrigo(false);

        task0PartC = `<h3> (c) (6 Punkte) Stellen Sie für die folgende Grafik den Ausdruck mit Elementarsignalen oder trigonometrischen Signalen auf:</h3>
                      <canvas id="chartE" width="800" height="400"></canvas>
                      <div style="margin-top: 30px; text-align: center;">
                          Ausdruck:
                          _________________________________________________________
                      </div>`;
        
       
        setTimeout(() => {
            if (expressionC.includes('cos') || expressionC.includes('sin') || expressionC.includes('exp')) {
                this.generateChart(expressionC, 'chartE', 'trigo'); // Trigonometrische Funktion
            } else {
                this.generateChart(expressionC, 'chartE', 'sigma'); // Sigma Funktion
            }
        }, 100);
    } else {
        
        const expressionC = Math.random() < 0.5 
        ? this.generateRandomExpressionSigma(true) 
        : this.generateRandomExpressionTrigo(true);
        

        task0PartC = `<h3> (c) (8 Punkte) Zeichnen Sie den Signalverlauf für folgenden Ausdruck:</h3>
                      ${expressionC}
                       </div>Bitte markiere eindeutig, welches bewertet werden soll.</div></div>
                      <div style="display: flex; justify-content: space-between;">
                          <div style="flex: 1; margin-right: 10px;">
                              <canvas id="chartE" width="400" height="300"></canvas>
                          </div>
                          <div style="flex: 1; margin-left: 10px;">
                              <canvas id="chartF" width="400" height="300"></canvas>
                          </div>
                      </div>`;
      
                      setTimeout(() => {
                        if (expressionC.includes('cos') || expressionC.includes('sin') || expressionC.includes('exp')) {
                            this.plotEmptyGrid('chartE', 'trigo'); 
                            this.plotEmptyGrid('chartF', 'trigo');
                        } else {
                            this.plotEmptyGrid('chartE', 'sigma'); 
                            this.plotEmptyGrid('chartF', 'sigma'); 
                        }
                    }, 100);
                }
   
    html += task0PartA + task0PartB + task0PartC;


    
    return html;
}
}