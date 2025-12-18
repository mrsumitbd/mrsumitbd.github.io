// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-awards-amp-services",
          title: "Awards &amp; Services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/awards/";
          },
        },{id: "nav-experience",
          title: "Experience",
          description: "My education and professional experience.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-photography",
          title: "Photography",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A collection of my research and development work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "post-is-code-really-more-39-natural-39-than-english",
        
          title: "Is Code Really More &#39;Natural&#39; Than English?",
        
        description: "We revisited the famous &#39;Natural Software&#39; hypothesis and found that syntax rules—not logic—drive most of the repetition in code.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/natural-software-revisited/";
          
        },
      },{id: "post-why-your-ai-model-costs-more-on-a-different-machine",
        
          title: "Why Your AI Model Costs More on a Different Machine",
        
        description: "We tested 30 AI systems across different environments. The result? Your accuracy might stay safe, but your cloud bill won&#39;t.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/impact-of-env-configurations/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-website-is-live",
          title: 'Website is live!',
          description: "",
          section: "News",},{id: "projects-codeprobe",
          title: 'CodeProbe',
          description: "A universal, interpretable detector for LLM-generated code.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/codeprobe/";
            },},{id: "projects-context-aware-code-generation",
          title: 'Context-Aware Code Generation',
          description: "Investigating the impact of environment on LLM code stability.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/context_aware/";
            },},{id: "projects-flakyfix",
          title: 'FlakyFix',
          description: "A VS Code plug-in for real-time flaky test detection and repair.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/flakyfix/";
            },},{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
        id: 'social-',
        title: '',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
