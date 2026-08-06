# Tarjeta Digital de Rol - Bruto

Este es el repositorio local de la Ficha de Rol digital de **Bruto**, diseñada como una página web premium para móviles y optimizada para ser escaneada mediante un código QR en una tarjeta de presentación física.

## 📂 Estructura del Proyecto

* **`index.html`**: Ficha del personaje con la estructura HTML, placeholder para foto, semáforo de juego e interactividad con la carta Pokémon.
* **`style.css`**: Hoja de estilos que implementa el tema de taller mecánico en modo oscuro con variables CSS personalizadas y transiciones fluidas.
* **`generar_qr.ps1`**: Script de PowerShell nativo para Windows. Permite descargar gratuitamente el código QR en alta definición apuntando a tu URL final.
* **`codigo_qr.png`**: Imagen del código QR generado (por defecto apunta a una plantilla de prueba).
* **`INSTRUCCIONES.md`**: Guía detallada paso a paso para desplegar el sitio gratis en GitHub Pages y actualizar los archivos.

---

## ⚙️ Configuración en el IDE

Este proyecto es una web estática pura (HTML y CSS vanilla sin frameworks complejos). 

### Visualización en tiempo real
Para visualizar tus cambios en vivo mientras editas en tu editor (como VS Code):
1. Instala la extensión **Live Server** (creada por Ritwick Dey).
2. Haz clic derecho sobre `index.html` y selecciona **"Open with Live Server"**.
3. Se abrirá una pestaña en tu navegador local que se recargará automáticamente cada vez que guardes cambios en tus archivos de código.
