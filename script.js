document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-image-btn');

  // Función para generar una imagen png de la página completa y descargarla como archivo
  function generateAndDownloadImage() {
    // Opciones para html2canvas (ajustar escalamiento)
    const options = {
      scale: 2, // Ajusta el valor para aumentar el tamaño de la imagen (1 = tamaño original)
    };

    // Convierte la página en una imagen con html2canvas y aplica las opciones
    html2canvas(document.body, options).then(function (canvas) {
      // Obtiene el enlace de descarga
      const link = document.createElement('a');
      link.download = "pagina_completa.png";
      link.href = canvas.toDataURL("image/png").replace(/^data:image\/[^;]/, 'data:application/octet-stream');

      // Simula el clic en el enlace para iniciar la descarga
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  generateBtn.addEventListener('click', generateAndDownloadImage);
});

  