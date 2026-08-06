# Guía de Uso y Despliegue de tu Tarjeta de Rol (Bruto)

¡El proyecto de Bruto está listo! Tienes una página web premium adaptada para móviles que aloja el perfil interactivo de **Bruto**. Todo el proceso es 100% gratuito.

Aquí tienes los pasos sencillos para personalizar los datos y subir el sitio a internet.

---

## Paso 1: Personalizar los datos (Opcional)

Si deseas modificar textos o detalles de Bruto:
1. Abre [index.html](file:///C:/Users/Desktop/.gemini/antigravity/scratch/tarjeta-bruto/index.html) con tu editor de texto favorito (como Bloc de Notas).
2. Modifica los textos que desees (como la presentación o el semáforo) y guarda el archivo.

---

## Paso 2: Publicar tu página gratis en GitHub Pages

GitHub Pages te permite hospedar tu sitio web de forma gratuita y permanente:

1. **Crea una cuenta**: Regístrate gratis en [github.com](https://github.com) si no tienes una.
2. **Crea un repositorio**:
   - Ve a [github.com/new](https://github.com/new).
   - Nombra tu repositorio como: `tarjeta-bruto`.
   - Márcalo como **Public** (Público) y haz clic en **Create repository**.
3. **Sube tus archivos**:
   - En la siguiente pantalla, haz clic en el enlace **"uploading an existing file"** (subir un archivo existente).
   - Selecciona y arrastra los siguientes archivos:
     - `index.html`
     - `style.css`
   - Haz clic en **Commit changes** (Confirmar cambios) al final de la página.
4. **Activa la página**:
   - Ve a la pestaña **Settings** (Configuración) en la parte superior de tu repositorio de GitHub.
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En la sección "Branch", cambia *None* por **main** (o *master*), y haz clic en **Save** (Guardar).
5. **Enlace obtenido**:
   - Espera un minuto, refresca la página de Settings y verás tu enlace definitivo en un cuadro verde. Será algo como:
     `https://tu-usuario.github.io/tarjeta-bruto/`

---

## Paso 3: Generar tu Código QR definitivo

Una vez que tengas tu URL de GitHub Pages (del Paso 2):

1. Abre una terminal de **PowerShell** en tu computadora.
2. Ve a la carpeta de este proyecto (`tarjeta-bruto`).
3. Corre el script ejecutando:
   ```powershell
   PowerShell -NoProfile -ExecutionPolicy Bypass -File .\generar_qr.ps1
   ```
4. El script te pedirá la URL definitiva. Pega tu URL de GitHub Pages y presiona **Enter**.
5. Se generará tu archivo `codigo_qr.png` definitivo y actualizado.

---

## Paso 4: Impresión y Laminado de tu Tarjeta Física

1. Diseña tu tarjeta física de Bruto (puedes usar Canva de forma gratuita).
2. Inserta la imagen `codigo_qr.png` generada en tu diseño de tarjeta.
3. ¡Imprime y lamina la tarjeta! Al escanearla, se abrirá directamente el perfil premium de Bruto con su tema exclusivo de taller.
