export function generatePdf(idelement, filename) {

    var el = document.getElementById(idelement);
    //
    const pdf = new jspdf.jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: 'a4',
        hotfixes: ["px_scaling"]
    });

    return new Promise((resolve, reject) => {
        pdf.html(el, {
            html2canvas: {
                scale: 0.6
            },
            callback: pdf => {
                pdf.save(filename);
                resolve();
            },
            margin: [10, 10, 10, 10],
            x: 0,
            y: 30,
        });
    });
}