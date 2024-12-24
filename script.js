document.addEventListener("DOMContentLoaded", function () {

    const runButton = document.getElementById("runButton")

    runButton.addEventListener("mousedown",run);

    function run() {
        const htmlCode = document.getElementById("html").value;
        const cssCode = document.getElementById("css").value;
        const jsCode = document.getElementById("javascript").value;
        const output = document.getElementById("output");

        let content = `
        
            ${htmlCode}
            <style> body{color: white;} ${cssCode}</style>
            <script>${jsCode}<\/script>
        `;

        output.style.color = "white";

        output.contentDocument.open();
        output.contentDocument.write(content);
        output.contentDocument.close();
    }
});
