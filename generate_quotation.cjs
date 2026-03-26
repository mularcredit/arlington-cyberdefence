const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    try {
        console.log('Launching Puppeteer...');
        // Launch headlessly
        const browser = await puppeteer.launch({
            headless: "new"
        });
        const page = await browser.newPage();
        
        // Define the local file path
        const htmlPath = path.join(__dirname, 'quotation.html');
        console.log(`Loading HTML from: ${htmlPath}`);
        
        await page.goto(`file://${htmlPath}`, { 
            waitUntil: 'networkidle0' 
        });

        // Generate PDF
        const pdfOutput = 'Arlington_Figbud_Jasiri_Quotation.pdf';
        await page.pdf({
            path: pdfOutput,
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0cm',
                right: '0cm',
                bottom: '0cm',
                left: '0cm'
            }
        });

        console.log(`Successfully generated PDF: ${pdfOutput}`);
        await browser.close();
    } catch (err) {
        console.error('Error generating PDF:', err);
        process.exit(1);
    }
})();
