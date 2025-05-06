document.addEventListener("DOMContentLoaded", () => {
    // Global styles
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-family: 'DejaVu Sans Mono';
        src: url('DejaVuSansMono.ttf') format('truetype');
      }
      body {
        margin: 0;
        padding: 200px;
        background-color: #000;
        color: #fff;
        font-family: 'DejaVu Sans Mono', monospace;
        font-size: 14px;
        white-space: pre;
      }
    `;
    document.head.appendChild(style);
    document.title = "zxcvWeb";
  
    // Matrix canvas
    const canvas = document.createElement('canvas');
    canvas.id = "cmatrix";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.zIndex = "-1";
    document.body.appendChild(canvas);
  
    // Footer links
    const footerContainer = document.createElement("div");
    footerContainer.style.position = "fixed";
    footerContainer.style.left = "0";
    footerContainer.style.right = "0";
    footerContainer.style.bottom = "0";
    footerContainer.style.display = "flex";
    footerContainer.style.flexDirection = "column";
    footerContainer.style.alignItems = "center";
    footerContainer.style.zIndex = "1";
  
    const links = [
      ["https://csh.rit.edu/", "CSH.png", 70],
      ["https://github.com/ComputerScienceHouse", "gCSH.png", 70],
      ["https://neovim.io/", "vim.gif", 180],
      ["https://fedoraproject.org/", "fedora.png", 180],
      ["http://www.openarena.ws", "quake.gif", 180],
      ["https://proxmox.com/en/", "proxmox.png", 180],
      ["https://distrowatch.com/table.php?distribution=dietpi", "distrowatch.gif", 180],
      ["https://www.thefreecountry.com", "tfc.gif", 180],
      ["https://en.wikipedia.org/wiki/Neon_Genesis_Evangelion", "lain.gif", 180],
      ["https://coolmathgames.tech/", "maryhouse.png", 180],
      ["https://wilnil.gay/", "wilnil_takeone.gif", 180],
      ["https://archive.org/", "internetarchive.gif", 180],
      ["https://nixos.org/", "nixos.png", 180],
      ["https://jellyfin.org/", "jellyfin.gif", 180],
      ["https://www.desmos.com/calculator", "something.gif", 180],
      ["https://xkcd.com/", "xkcd.gif", 180],
      ["https://youtube/RHuQqLxmEyg?si=uO_21eCqvMK690r4", "gh.gif", 180],
      ["https://forums.developer.nvidia.com/t/pytorch-and-torchvision-for-jetpack-6-2/325257/12", "nvidia.gif", 180],
      ["https://www.ebay.com/", "Ebay.gif", 180],
      ["https://filen.io/", "cloud.gif", 180],
      ["ibm.html", "IMB.gif", 180],
      ["https://www.intel.com/content/www/us/en/download-center/home.html", "driver.gif", 180],
      ["https://proton.me/mail", "mail.gif", 180],
      ["https://youtu.be/u4ecB57jFhI?si=l1uXlmLR-CJWUMcZ", "bit.gif", 180],
      ["https://discord.com/channels/@me", "chat.gif", 170],
      ["https://duckduckgo.com/?q=firefox&ia=web", "search.gif", 180],
    ];
  
    const rows = [document.createElement("div"), document.createElement("div")];
    rows.forEach(row => {
      row.style.display = "flex";
      row.style.justifyContent = "center";
      row.style.flexWrap = "wrap";
      footerContainer.appendChild(row);
    });
  
    links.forEach((link, index) => {
      const [href, src, width] = link;
      const a = document.createElement("a");
      a.href = href;
      const img = document.createElement("img");
      img.src = src;
      img.style.width = width + "px";
      a.appendChild(img);
      rows[Math.floor(index / 14)].appendChild(a);
    });
  
    document.body.appendChild(footerContainer);
  
    // Matrix animation logic
    const ctx = canvas.getContext('2d');
    const fontSize = 14;
    const letters = 'アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチッヂヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
    let columns, drops;
  
    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(1);
    }
  
    function drawMatrix() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#0FC';
      ctx.font = fontSize + 'px monospace';
  
      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }
  
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    setInterval(drawMatrix, 33);
  });
  
  // Search functionality
  function performSearch() {
    const query = document.getElementById("searchBar").value.trim();
    if (query !== "") {
      const searchURL = `https://duckduckgo.com/?q=${encodeURIComponent(query)}`;
      window.open(searchURL, "_blank");
      buttonClick(); // Clear input
    } else {
      alert("Please enter a search term!");
    }
  }
  
  function buttonClick() {
    document.getElementById("searchBar").value = "";
  }
  
