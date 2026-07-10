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
        },{id: "nav-achievements",
          title: "Achievements",
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
        },{id: "post-data-version-control-dvc-the-action-and-the-reaction",
        
          title: "Data Version Control (DVC): The Action and The Reaction",
        
        description: "An empirical study on how open-source developers actually use DVC and how it impacts their workflow.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/dvc-action-reaction/";
          
        },
      },{id: "post-the-reality-check-why-ai-struggles-with-real-world-software-engineering",
        
          title: "The Reality Check: Why AI Struggles with Real-World Software Engineering",
        
        description: "A deep dive into my latest paper on the gap between synthetic benchmarks and real-world code generation.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/beyond-synthetic-benchmarks/";
          
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
          section: "News",},{id: "news-paper-accepted-and-published-at-ease-2026-openclassgen-a-large-scale-open-dataset-of-llm-generated-python-classes-doi-10-1145-3816483-3816547",
          title: 'Paper accepted and published at EASE 2026 — OpenClassGen: A Large-Scale Open Dataset...',
          description: "",
          section: "News",},{id: "news-presented-at-the-doctoral-symposium-at-ease-2026-talk-title-from-observation-to-explanation-mechanistic-interpretability-of-llm-generated-code-for-principled-repair",
          title: 'Presented at the Doctoral Symposium at EASE 2026. Talk title: “From Observation to...',
          description: "",
          section: "News",},{id: "news-actively-seeking-industry-and-research-roles-in-ml-ai-engineering-applied-science-and-data-science-open-to-opportunities-across-canada-and-the-us",
          title: 'Actively seeking industry and research roles in ML/AI Engineering, Applied Science, and Data...',
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
            },},{id: "projects-craft",
          title: 'CRAFT',
          description: "Contextual Repair Agent for Flaky Tests - A Multi-Agent VS Code extension.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/craft/";
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
      },];
