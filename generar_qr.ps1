# Script de PowerShell para generar el codigo QR gratis de Bruto
# Guarda este archivo para ejecutar en Windows de forma nativa.

$urlDefecto = "https://tu-usuario.github.io/tarjeta-bruto/"

Write-Host "--- GENERADOR DE CODIGO QR PARA LA TARJETA DE BRUTO ---" -ForegroundColor Cyan
Write-Host "Este script creara una imagen PNG con el codigo QR listo para imprimir."
Write-Host "Puedes ingresar el enlace definitivo de tu sitio web de GitHub Pages."
Write-Host "------------------------------------------------"

# Solicitar URL al usuario
Write-Host ""
$entrada = Read-Host "Ingresa la URL definitiva (presiona Enter para usar '$urlDefecto')"
$urlFinal = $urlDefecto
if ($entrada -ne "") {
    $urlFinal = $entrada
}

$nombreArchivo = "codigo_qr.png"

# Codificar la URL para que sea valida en la peticion HTTP
try {
    Add-Type -AssemblyName System.Web
    $urlCodificada = [System.Web.HttpUtility]::UrlEncode($urlFinal)
}
catch {
    $urlCodificada = [Uri]::EscapeDataString($urlFinal)
}

# URL de la API de QRServer (500x500 pixeles, correccion de errores Alta 'H')
$apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=500x500" + "&ecc=H" + "&data=" + $urlCodificada

$rutaCompleta = Join-Path $PSScriptRoot $nombreArchivo

Write-Host ""
Write-Host "Generando codigo QR para: $urlFinal" -ForegroundColor Yellow
Write-Host "Descargando imagen en alta resolucion..."

try {
    # Realizar descarga usando el cliente web integrado de .NET
    $webClient = New-Object System.Net.WebClient
    $webClient.DownloadFile($apiUrl, $rutaCompleta)
    
    Write-Host ""
    Write-Host "Exito! El codigo QR ha sido guardado como: $nombreArchivo" -ForegroundColor Green
    Write-Host "-> RUTA: $rutaCompleta" -ForegroundColor White
    Write-Host "`nYa puedes insertar esta imagen en el diseno de tu tarjeta fisica."
}
catch {
    Write-Host ""
    Write-Host "Error al descargar el codigo QR: $_" -ForegroundColor Red
    Write-Host "Asegurate de estar conectado a Internet e intentalo de nuevo."
}
