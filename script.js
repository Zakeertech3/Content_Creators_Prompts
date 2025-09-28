// Creator Prompt Hub - Main JavaScript

// Data for Image Prompt Resources
const imagePromptResources = [
    {
        title: "PicoTrex Nano Banana Images",
        description: "Comprehensive gallery of cases and examples for Nano Banana image generation",
        url: "https://github.com/PicoTrex/Awesome-Nano-Banana-images",
        badge: "Gallery",
        stats: { stars: "1.2k", cases: "100+" }
    },
    {
        title: "GPT-4o Image Prompts",
        description: "Curated image prompt gallery specifically designed for GPT-4o capabilities",
        url: "https://github.com/ImgEdify/Awesome-GPT4o-Image-Prompts",
        badge: "GPT-4o",
        stats: { stars: "800", prompts: "300+" }
    },
    {
        title: "Awesome Nano Banana Curation",
        description: "Ultimate curated collection of prompts for Nano Banana AI model",
        url: "https://github.com/JimmyLv/awesome-nano-banana",
        badge: "Curated",
        stats: { stars: "2.1k", prompts: "750+" }
    },
    {
        title: "Claude Prompt Patterns",
        description: "Professional prompt patterns for Anthropic Claude with image generation focus",
        url: "https://github.com/langgptai/awesome-claude-prompts",
        badge: "Patterns",
        stats: { stars: "1.5k", prompts: "400+" }
    },
    {
        title: "Content Creation Prompts",
        description: "Specialized prompts for content creation including image generation workflows",
        url: "https://github.com/aminblm/awesome-chatgpt-content-creation-prompts",
        badge: "Creative",
        stats: { stars: "900", prompts: "250+" }
    },
    {
        title: "General Prompt Compendium",
        description: "The most comprehensive collection of ChatGPT prompts including image generation",
        url: "https://github.com/f/awesome-chatgpt-prompts",
        badge: "Complete",
        stats: { stars: "15k", prompts: "1000+" }
    }
];

// Data for Video Prompt Resources
const videoPromptResources = [
    {
        title: "Veo-Style Prompt Gallery",
        description: "Cutting-edge video generation prompts in Veo style for modern AI models",
        url: "https://github.com/jax-explorer/awesome-veo3-videos",
        badge: "Veo-Style",
        stats: { stars: "600", prompts: "200+" }
    },
    {
        title: "Text-to-Video Discovery",
        description: "Comprehensive discovery hub for video generation tools and techniques",
        url: "https://github.com/topics/video-generation",
        badge: "Discovery",
        stats: { repos: "500+", tools: "50+" }
    },
    {
        title: "Awesome Video Prompts",
        description: "Professional video generation prompts for various AI models and platforms",
        url: "https://github.com/ilkerzg/awesome-video-prompts",
        badge: "Professional",
        stats: { stars: "1.1k", prompts: "400+" }
    },
    {
        title: "Video Diffusion Collection",
        description: "Research-grade video diffusion prompts and cutting-edge techniques",
        url: "https://github.com/showlab/Awesome-Video-Diffusion",
        badge: "Research",
        stats: { stars: "2.3k", papers: "100+" }
    },
    {
        title: "Open-Sora",
        description: "Open-source video generation framework with comprehensive prompt library",
        url: "https://github.com/hpcaitech/Open-Sora",
        badge: "Open Source",
        stats: { stars: "8.5k", models: "10+" }
    },
    {
        title: "Wan-Video 2.1",
        description: "Advanced video generation prompts and techniques for Wan-Video 2.1 model",
        url: "https://github.com/Wan-Video/Wan2.1",
        badge: "Advanced",
        stats: { stars: "1.8k", prompts: "300+" }
    }
];

// Data for AI Tools
const aiTools = [
    // Text & Chat Tools
    {
        name: "Google Gemini",
        description: "Google's most capable AI model with multimodal capabilities",
        url: "https://gemini.google.com/",
        category: "text",
        icon: "🤖"
    },
    {
        name: "OpenAI ChatGPT",
        description: "GPT-4o with advanced reasoning and image generation",
        url: "https://chat.openai.com/",
        category: "text",
        icon: "💬"
    },
    {
        name: "Anthropic Claude",
        description: "Constitutional AI with strong reasoning capabilities",
        url: "https://claude.ai/",
        category: "text",
        icon: "🧠"
    },
    {
        name: "Microsoft Copilot",
        description: "AI assistant integrated with Microsoft services",
        url: "https://copilot.microsoft.com/",
        category: "text",
        icon: "🔧"
    },
    {
        name: "Notion AI",
        description: "AI writing assistant integrated with Notion workspace",
        url: "https://www.notion.so/product/ai",
        category: "text",
        icon: "📝"
    },

    // Image Generation Tools
    {
        name: "Midjourney",
        description: "Premium AI art generator with exceptional quality",
        url: "https://www.midjourney.com/",
        category: "image",
        icon: "🎨"
    },
    {
        name: "Stable Diffusion",
        description: "Open-source image generation with various interfaces",
        url: "https://stablediffusionweb.com/",
        category: "image",
        icon: "🖼️"
    },
    {
        name: "Adobe Firefly",
        description: "Adobe's AI image generator integrated with Creative Suite",
        url: "https://firefly.adobe.com/",
        category: "image",
        icon: "🔥"
    },
    {
        name: "Canva AI",
        description: "AI-powered design tools within Canva platform",
        url: "https://www.canva.com/ai-image-generator/",
        category: "image",
        icon: "🎭"
    },
    {
        name: "Ideogram",
        description: "AI image generator with excellent text rendering",
        url: "https://ideogram.ai/",
        category: "image",
        icon: "💡"
    },
    {
        name: "Leonardo AI",
        description: "Professional AI art generation with fine-tuned models",
        url: "https://leonardo.ai/",
        category: "image",
        icon: "🎯"
    },
    {
        name: "Recraft",
        description: "AI design tool for creating consistent brand assets",
        url: "https://www.recraft.ai/",
        category: "image",
        icon: "✨"
    },
    {
        name: "Copilot Designer",
        description: "Microsoft's AI image generator powered by DALL-E",
        url: "https://copilot.microsoft.com/images/create",
        category: "image",
        icon: "🎨"
    },
    {
        name: "NightCafe",
        description: "AI art generator with multiple algorithms and styles",
        url: "https://nightcafe.studio/",
        category: "image",
        icon: "🌙"
    },
    {
        name: "DreamStudio",
        description: "Stability AI's official Stable Diffusion interface",
        url: "https://dreamstudio.ai/",
        category: "image",
        icon: "💭"
    },
    {
        name: "Freepik AI",
        description: "AI image generator with commercial-use friendly licensing",
        url: "https://www.freepik.com/ai/image-generator",
        category: "image",
        icon: "🆓"
    },
    {
        name: "Flux AI",
        description: "Black Forest Labs' advanced image generation model",
        url: "https://flux1.ai/",
        category: "image",
        icon: "⚡"
    },
    {
        name: "Krea",
        description: "Real-time AI image generation and editing",
        url: "https://www.krea.ai/",
        category: "image",
        icon: "🚀"
    },
    {
        name: "Decohere",
        description: "AI video and image generation platform",
        url: "https://www.decohere.ai/",
        category: "image",
        icon: "🎪"
    },
    {
        name: "Hugging Face Spaces",
        description: "Open-source AI models and tools community",
        url: "https://huggingface.co/spaces",
        category: "image",
        icon: "🤗"
    },

    // Video Generation Tools
    {
        name: "Runway",
        description: "Professional AI video generation and editing suite",
        url: "https://runwayml.com/",
        category: "video",
        icon: "🎬"
    },
    {
        name: "HeyGen",
        description: "AI avatar and video generation platform",
        url: "https://www.heygen.com/",
        category: "video",
        icon: "👤"
    },
    {
        name: "Open-Sora",
        description: "Open-source video generation model",
        url: "https://github.com/hpcaitech/Open-Sora",
        category: "video",
        icon: "🌟"
    },
    {
        name: "Wan Video",
        description: "Advanced video generation with Wan2.1 model",
        url: "https://wan-video.github.io/",
        category: "video",
        icon: "📹"
    },
    {
        name: "Genmo Mochi",
        description: "AI video generation with creative controls",
        url: "https://www.genmo.ai/",
        category: "video",
        icon: "🍡"
    },
    {
        name: "Pika",
        description: "AI video generator with text-to-video capabilities",
        url: "https://pika.art/",
        category: "video",
        icon: "⚡"
    },
    {
        name: "Vyond",
        description: "Professional animated video creation platform",
        url: "https://www.vyond.com/",
        category: "video",
        icon: "🎭"
    },
    {
        name: "Animaker",
        description: "DIY video animation platform with AI features",
        url: "https://www.animaker.com/",
        category: "video",
        icon: "🎪"
    },
    {
        name: "InVideo AI",
        description: "AI-powered video creation and editing platform",
        url: "https://invideo.io/ai/",
        category: "video",
        icon: "📺"
    },
    {
        name: "Kapwing AI",
        description: "Online video editor with AI-powered features",
        url: "https://www.kapwing.com/ai",
        category: "video",
        icon: "✂️"
    }
];

// DOM Elements
let currentSection = 'home';
let currentToolCategory = 'all';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Creator Prompt Hub loaded successfully!');
    
    initializeApp();
    setupEventListeners();
    loadContent();
    animateStats();
});

// Initialize application
function initializeApp() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    // Set initial section
    const hash = window.location.hash.replace('#', '') || 'home';
    navigateToSection(hash);
}

// Setup event listeners
function setupEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile menu
    const mobileToggle = document.getElementById('mobileMenuToggle');
    const navMenu = document.getElementById('navMenu');
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }
    
    // Tool category tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', handleToolCategoryChange);
    });
    
    // Hash change listener
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash.replace('#', '') || 'home';
        navigateToSection(hash);
    });
    
    // Smooth scrolling for hero buttons
    window.scrollToSection = function(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            // Update URL
            history.pushState(null, null, `#${sectionId}`);
            // Update navigation
            updateActiveNavLink(sectionId);
        }
    };
}

// Handle navigation
function handleNavigation(e) {
    e.preventDefault();
    const href = e.target.getAttribute('href');
    const sectionId = href.replace('#', '');
    
    navigateToSection(sectionId);
    
    // Close mobile menu if open
    const navMenu = document.getElementById('navMenu');
    const mobileToggle = document.getElementById('mobileMenuToggle');
    if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        mobileToggle.classList.remove('active');
    }
}

// Navigate to section
function navigateToSection(sectionId) {
    currentSection = sectionId;
    
    // Update URL
    if (sectionId !== 'home') {
        history.pushState(null, null, `#${sectionId}`);
    } else {
        history.pushState(null, null, '/');
    }
    
    // Update active nav link
    updateActiveNavLink(sectionId);
    
    // Scroll to section
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active navigation link
function updateActiveNavLink(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
    
    // Show notification to confirm it's working
    showNotification(`Switched to ${newTheme} mode`, 'success');
}

// Update theme icon
function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Load content
function loadContent() {
    loadImagePrompts();
    loadVideoPrompts();
    loadAITools();
}

// Load image prompts
function loadImagePrompts() {
    const grid = document.getElementById('imagePromptsGrid');
    if (!grid) return;
    
    grid.innerHTML = imagePromptResources.map(resource => `
        <div class="resource-card fade-in-up">
            <div class="resource-header">
                <h3 class="resource-title">${resource.title}</h3>
                <span class="resource-badge">${resource.badge}</span>
            </div>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-stats">
                ${Object.entries(resource.stats).map(([key, value]) => 
                    `<span><strong>${value}</strong> ${key}</span>`
                ).join('')}
            </div>
            <div class="resource-actions">
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    🔗 View Repository
                </a>
                <button class="btn btn-secondary" onclick="copyResourceLink('${resource.url}')">
                    📋 Copy Link
                </button>
            </div>
        </div>
    `).join('');
}

// Load video prompts
function loadVideoPrompts() {
    const grid = document.getElementById('videoPromptsGrid');
    if (!grid) return;
    
    grid.innerHTML = videoPromptResources.map(resource => `
        <div class="resource-card fade-in-up">
            <div class="resource-header">
                <h3 class="resource-title">${resource.title}</h3>
                <span class="resource-badge">${resource.badge}</span>
            </div>
            <p class="resource-description">${resource.description}</p>
            <div class="resource-stats">
                ${Object.entries(resource.stats).map(([key, value]) => 
                    `<span><strong>${value}</strong> ${key}</span>`
                ).join('')}
            </div>
            <div class="resource-actions">
                <a href="${resource.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    🔗 View Repository
                </a>
                <button class="btn btn-secondary" onclick="copyResourceLink('${resource.url}')">
                    📋 Copy Link
                </button>
            </div>
        </div>
    `).join('');
}

// Load AI tools
function loadAITools() {
    const grid = document.getElementById('aiToolsGrid');
    if (!grid) return;
    
    renderAITools();
}

// Render AI tools based on category
function renderAITools() {
    const grid = document.getElementById('aiToolsGrid');
    if (!grid) return;
    
    const filteredTools = currentToolCategory === 'all' 
        ? aiTools 
        : aiTools.filter(tool => tool.category === currentToolCategory);
    
    grid.innerHTML = filteredTools.map(tool => `
        <div class="tool-card fade-in-up">
            <span class="tool-icon">${tool.icon}</span>
            <h3 class="tool-name">${tool.name}</h3>
            <p class="tool-description">${tool.description}</p>
            <span class="tool-category">${getCategoryLabel(tool.category)}</span>
            <a href="${tool.url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                🚀 Launch Tool
            </a>
        </div>
    `).join('');
}


// Handle tool category change
function handleToolCategoryChange(e) {
    const category = e.target.getAttribute('data-category');
    currentToolCategory = category;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Re-render tools
    renderAITools();
}

// Get category label
function getCategoryLabel(category) {
    const labels = {
        'text': 'Text & Chat',
        'image': 'Image Generation',
        'video': 'Video Generation'
    };
    return labels[category] || category;
}

// Copy resource link
function copyResourceLink(url) {
    navigator.clipboard.writeText(url).then(() => {
        showNotification('Link copied to clipboard!', 'success');
    }).catch(() => {
        showNotification('Failed to copy link', 'error');
    });
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        font-weight: 500;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Get notification color
function getNotificationColor(type) {
    const colors = {
        'success': '#10b981',
        'error': '#ef4444',
        'warning': '#f59e0b',
        'info': '#3b82f6'
    };
    return colors[type] || colors.info;
}

// Animate statistics
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = parseInt(target.getAttribute('data-count'));
                animateValue(target, 0, finalValue, 2000);
                observer.unobserve(target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

// Animate value
function animateValue(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (end - start) * easeOutQuart);
        
        element.textContent = current + (end >= 1000 ? '+' : '');
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// Intersection Observer for animations
const observeElements = () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe cards that don't have animation class yet
    document.querySelectorAll('.resource-card:not(.fade-in-up), .tool-card:not(.fade-in-up), .feature-item:not(.fade-in-up)').forEach(el => {
        observer.observe(el);
    });
};

// Re-observe elements when content changes
const reObserveElements = () => {
    setTimeout(observeElements, 100);
};

// Call reObserveElements after content loads
setTimeout(reObserveElements, 500);

// Smooth scroll behavior for all internal links
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL and navigation
            history.pushState(null, null, `#${targetId}`);
            updateActiveNavLink(targetId);
        }
    }
});

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.replace('#', '') || 'home';
    updateActiveNavLink(hash);
});

console.log('Creator Prompt Hub initialized successfully!');
