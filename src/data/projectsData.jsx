import React from "react"

export const projectsData = [
    {
        projectId: "interactive-textbook-reader",
        src: "/img/interactive-english-textbook-reader.png",
        alt: "Home page of the textbook interactive reader application.",
        liveLink: "https://interactive-textbook-reader.netlify.app/",
        codeLink: "https://github.com/zhixin99/interactive-textbook-reader",
        date: "Apr 21, 2026", 
        timestamp: "2026-04-21",
        header: "English Textbook Reader", 
        description: "It is built with React and Firebase, and features a system that allows students to click any part of a page for instant translation and audio pronunciation.",
        tags: [
            { name: "React Context API", type: "js" },
            { name: "Firebase Auth & Firestore", type: "api" },
            { name: "Web Speech API", type: "api" },
            { name: "Coordinate Mapping", type: "js" },
            { name: "Dynamic Routing", type: "js" },
        ],
        contentBlocks: [
            { 
                type: 'p', 
                text: <>This is my first solo project and I am excited to share my learnings and thoughts with you in this article.</>
            },
            { 
                type: 'h2', 
                text: 'The Background' 
            },
            { 
                type: 'p', 
                text: "My mom is a primary school English teacher in China. She has always wanted an all-in-one platform where her students could preview lessons, hear native pronunciation, and practice dictation for key vocabulary. To help her and her students, I decided to build this platform from scratch."
            },
            { 
                type: 'h2', 
                text: 'The Tech Stack' 
            },
            { 
                type: 'h3', 
                text: '1. React & Functional Architecture' 
            },
            { 
                type: 'list-summary', 
                text: <>The frontend is built with <span className="blog__text-highlight">React</span>, utilizing a component-based architecture to keep the code organized and reusable.</>
            },          
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Secure Routing with Layout Guards:</span> I implemented a PaymentGuard using a <span className="blog__text-grey-background">Layout Wrapper</span> pattern. It ensures that only logged-in and authorized users can access core learning materials. If a user isn't authenticated or hasn't activated their account, they are automatically redirected to the sign-up or activation page. </>, 
                    <><span className="blog__text-bold">Linking with Dynamic Routing:</span> Using <span className="blog__text-grey-background">react-router-dom</span>, I created a deep-linking system that maps the application's state directly to the URL. By using dynamic parameters <span className="blog__text-grey-background">(/:grade/:semester/:unit)</span> and <span className="blog__text-grey-background">useParams()</span> hook, users can easily jump between different lessons.</>, 
                    <><span className="blog__text-bold">Managing page indices with hooks:</span> I used the <span className="blog__text-grey-background">useState</span> and <span className="blog__text-grey-background">useEffect</span> hooks to handle the textbook navigation. For example, <span className="blog__text-grey-background">currentPageIndex</span> is the source of truth for what the user is currently seeing. When this state changes, the entire UI (the image, the sentence hotspots, and the progress bar) updates instantly. I also used <span className="blog__text-grey-background">useEffect</span> to watch the unit variable. Whenever the unit changes, the hook resets the page index to 0 so the user always starts from the beginning of a new lesson. </>]
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/routing.png',
                alt: 'The grade selector and the unit selector',
            },
            { 
                type: 'h3', 
                text: '2. Cloud Backend & Real-Time Data Persistence' 
            },  
            { 
                type: 'list-summary', 
                text: "To store user's data and provide a seamless experience across devices, I integrated Firebase."
            },            
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Secure Authentication & User Architecture:</span> I implemented <span className="blog__text-highlight">Firebase Authentication</span> to manage user identities securely. Upon sign-up, a corresponding document is automatically created in a Firestore <span className="blog__text-grey-background">users</span> collection. I also created a <span className="blog__text-grey-background">activation_codes</span> collection to store valid keys. This acts as a gatekeeper, granting access to curriculum only after a valid code is verified against the database.</>, 
                ] 
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/log.png',
                alt: 'The sign-up and activation page of the app.',
            },
            {
                type: 'list',
                items: [
                    <><span className="blog__text-bold">Intelligent Progress & Error Tracking:</span> To create a personalized learning loop, the system tracks the student performance in real-time. This data includes last studied timestamp, current grade/semester/unit, mistakes, and completed units. </>, 
                ] 
            },
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/dashboard.png',
                alt: 'The dashboard, learn and mistake page of the app.',
            },
            { 
                type: 'h3', 
                text: '3. The "Hotmap" Engine' 
            },  
            { 
                type: 'p', 
                text: <>One of the most interactive features is the custom Hotmap Layer. By mapping coordinate data onto textbook images and using a custom <span className="blog__text-grey-background">speak()</span> utility built with the <span className="blog__text-highlight">Web Speech API</span>, I created a "point-and-speak" feature which allows the student to click directly on any sentence in the textbook to hear it read aloud instantly.</>
            }, 
            {
                type: 'image',
                src: '/img/interactive-textbook-reader/learn.png',
                alt: 'The learning mode of the app, including the textbook reader, the vocabulary mode, and the dication mode',
            },
            { 
                type: 'h2', 
                text: 'My Takeaways' 
            },
            { 
                type: 'h3', 
                text: '1.Plan the Architecture Before Coding' 
            },
            { 
                type: 'p', 
                text: <>I realized that mapping out the entire user flow and listing the main features is essential. By deciding exactly what I wanted to achieve first, I saved myself hours of back-and-forth later. I also realized that having a draft UI design is quite important for an easier css design.</>
            }, 
            { 
                type: 'h3', 
                text: '2. Build the Code Skeleton First' 
            },
            { 
                type: 'p', 
                text: <>It is quite overwhelming to work on a large project, so I learned to prioritize the core structure. Instead of getting lost in small details, I focused on creating the main <span className="blog__text-highlight">page components</span> and ensuring the <span className="blog__text-highlight">routing</span> worked first. Once the foundation was solid, I could focus on the smaller, more complex components later.</>
            }, 
        ]
    }, 


]