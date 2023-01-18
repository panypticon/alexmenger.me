import tfwImage from '../images/what_tfw_detail.png';
import ch24Image from '../images/what_ch24_detail.png';
import dciImage1 from '../images/what_dci_detail_1.png';
import dciImage2 from '../images/what_dci_detail_2.png';
import dciImage3 from '../images/what_dci_detail_3.png';
import shoreImage1 from '../images/what_shore_detail_1.png';
import shoreImage2 from '../images/what_shore_detail_2.png';
import shoreImage3 from '../images/what_shore_detail_3.png';

const uxModalData = {
    tfw: {
        category: 'UX // Concept',
        company: 'TFW',
        summary: 'Vacation rental management software',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As UX and concept designer, I employed a <strong>cooperative, user-centric design toolset</strong> to help our customer better understand product requirements and user needs.</p><p>Once the project’s core principles were fleshed out, I designed its basic user experience, creating the <strong>core interaction patterns and UI components</strong> for a desktop-centric web app.</p><p>In parallel, I supported our UI designers in compiling an Atomic Design-based pattern library in Sketch.</p><h2>Weapons of choice</h2><p>Axure RP, paper, sticky notes</p>',
        image: {
            url: tfwImage,
            caption: 'Rental offer generation workflow in a desktop-centric web app (hi-fi mockups)'
        }
    },
    ch24: {
        category: 'UX // Product',
        company: 'CHECK24',
        summary: 'Price/feature comparison for insurance products',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As a UX-centric product manager, my goal was to improve the user experience of a data-driven, high-volume B2C product throughout its entire customer journey.</p><p>Via iterative improvements to the core product and associated processes (landing pages, e-mail communication, documents) and <strong>extensive quantitative testing</strong>, we were able to improve both conversion and overall customer satisfaction.</p><p>In addition, I created the experience for several smaller, niche-oriented comparison products, and did the <strong>foundational work for universal UI components</strong> that were used in a company-wide relaunch.</p><h2>Weapons of choice</h2><p>Balsamiq, paper, sticky notes</p>',
        image: {
            url: ch24Image,
            caption: 'Desktop- and mobile-centric flows for insurance comparisons'
        }
    },
    shore: {
        category: 'UX // UI',
        company: 'Shore',
        summary: 'Customer and appointment management for SMBs',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As Senior UX Manager, I accompanied the product development cycle from concept to prototype to final release.</p><p>Together with POs, I conducted user tests and iterated upon my designs to meet user expectations.</p><p>With our visual designers, I <strong>created final comps for development</strong> and compiled an Atomic Design-based pattern library in Sketch.</p><h2>Weapons of choice</h2><p>Sketch, Invision, paper, sticky notes</p>',
        carousel: [
            {
                url: shoreImage1,
                caption: 'Mobile-first appointment booking flow, easily integratable into SMB websites (hi-fi mockups)'
            },
            {
                url: shoreImage2,
                caption:
                    'Mobile-first appointment booking flow, easily integratable into SMB websites, ctd. (hi-fi mockups)'
            },
            {
                url: shoreImage3,
                caption: 'Self-signup and initial product configuration process (high-fidelity mockups)'
            }
        ]
    },
    dci: {
        category: 'UX // UI',
        company: 'DCI',
        summary: 'Online learning platform for technology education',
        content:
            // eslint-disable-next-line max-len
            '<h2>My work</h2><p>As Senior UX Designer, I accompanied the product development cycle from early prototypes to UI design to implementation.</p><p>To gather requirements, I held a stakeholder workshop and used these insights to <strong>design and test an interactive prototype</strong>. For implementation I created a comprehensive, <strong>atomic UI library in Sketch</strong>. In parallel, I designed <strong>high-fidelity feature specs</strong>, wrote user stories, and planned Scrum sprints in Jira.</p><p>Bonus: After a few months I adopted a developer role and <strong>implemented UI components and frontend features in React</strong>.</p><h2>Weapons of Choice</h2>Sketch, Figma, VS Code, Miro<p></>',
        carousel: [
            {
                url: dciImage1,
                caption: 'Course timeline with available materials (hi-fi comp)'
            },
            {
                url: dciImage2,
                caption: 'Detail modal for code examples (hi-fi comp)'
            },
            {
                url: dciImage3,
                caption: 'UI specs for search and module progress components'
            }
        ]
    }
};

export default uxModalData;
