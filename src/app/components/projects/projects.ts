import { Component, Inject } from '@angular/core';
import { Project } from '../../models/project.model';
import { CommonModule } from '@angular/common';
import { DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [
    {
      title: 'WARLOC Modernization',
      duration: 'Mar 2021 – Jan 2025',
      description: `Led modernization of a legacy enterprise app to eliminate Internet Explorer dependency and build a scalable, maintainable architecture.`,
      contributions: [
        'Re-architected the application with Angular',
        'Reduced technical debt by migrating legacy JS to TypeScript',
        'Designed modular, reusable components',
        'Improved cross-browser support and developer velocity',
      ],
      techStack: [
        'Angular 12–17',
        'TypeScript',
        'TailwindCSS',
        'RxJS',
        'Node.js',
        'Azure DevOps',
      ],
    },
    {
      title: 'Meredith Data Dictionary',
      duration: 'Feb 2020 – Feb 2021', // Adjust as needed
      description:
        'A metadata-driven internal tool designed to catalog and visualize database schema and usage metrics, helping to optimize cloud resource allocation and reduce cost.',
      contributions: [
        'Architected and developed major components of the metadata visualization platform',
        'Led the development team across multiple modules and integrations',
        'Designed UI workflows to navigate and filter data lineage and definitions',
        'Integrated cloud optimization insights from collected metadata',
        'Collaborated with data architects and infrastructure teams to ensure scalability',
      ],
      techStack: [
        'Angular',
        'Node.js',
        'MongoDB',
        'RxJS',
        'TypeScript',
        'Azure Cloud',
      ],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Engage',
      duration: 'Feb 2019 – Jan 2020', // Adjust if needed
      description:
        'An intelligent engagement platform that identifies and tracks user interests raised from multiple sources to provide actionable insights and dynamic workspace experience.',
      contributions: [
        'Designed core architecture for high performance and scalable user experience',
        'Implemented a dynamic, tab-based layout inspired by VS Code for multitasking workflows',
        'Enabled users to interact with multiple engagement areas simultaneously in a seamless UI',
        'Optimized data flow and rendering performance using RxJS and Angular OnPush',
        'Worked closely with product stakeholders to define core UX workflows',
      ],
      techStack: [
        'Angular',
        'RxJS',
        'TypeScript',
        'SCSS',
        'Node.js',
        'WebSockets',
      ],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Sales & Distribution (NextERP - SD)',
      duration: 'Jan 2018 – Dec 2018', // Adjust if needed
      description:
        'An enterprise module that supports quote creation and order process management as part of a larger NextERP suite. Integrated Angular front-end with SAP SD backend to streamline sales workflows.',
      contributions: [
        'Developed Quote Agreements and Pricing Contracts modules from scratch',
        'Integrated SAP SD services with Angular for dynamic UI-driven operations',
        'Implemented form-driven workflows and validations based on SAP data models',
        'Collaborated with SAP consultants to align frontend behavior with backend logic',
        'Improved end-user efficiency through responsive, component-driven UI',
      ],
      techStack: [
        'Angular',
        'SAP SD',
        'TypeScript',
        'SAP HANA',
        'SCSS',
        'RxJS',
        'REST APIs',
      ],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Lead2Opportunity (NextERP - CRM)',
      duration: 'Jan 2017 – Dec 2017', // Adjust if needed
      description:
        'A customer relationship management (CRM) tool designed to capture, manage, and convert leads into opportunities within the NextERP suite. Focused on user experience and seamless information flow between customer touchpoints.',
      contributions: [
        'Guided development of CRM modules including Leads and Contacts',
        'Enhanced application responsiveness and usability for sales teams',
        'Improved client-side performance using Angular change detection strategies',
        'Built reusable components for consistent UI across CRM modules',
        'Worked closely with functional consultants to refine user workflows',
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'HTML5/CSS3', 'Node.js'],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Employee Relations Tool (ERT)',
      duration: '2016 – 2017', // Adjust as needed
      description:
        'An internal tool used by bank managers to take employee-related actions via guided, wizard-based workflows. Focused on role-based control and secure handling of sensitive employee data.',
      contributions: [
        'Developed the Security Admin Tool to manage role-based access and visibility',
        'Designed and architected key application components in collaboration with architects',
        'Implemented wizard-based workflows for guided employee action handling',
        'Integrated Angular routing and lazy loading to optimize performance',
        'Ensured compliance with internal data security and access control policies',
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'SCSS'],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Attendance Management Tool (AMT)',
      duration: '2015 – 2016', // Adjust as needed
      description:
        'A tool for managing employee absences, proxy allocations, and time-off reporting across departments. Built to improve visibility into attendance trends and reduce manual tracking.',
      contributions: [
        'Developed employee attendance tracking and absence reporting modules',
        'Created UI components for managing proxy assignments and approvals',
        'Integrated dynamic calendar and notification features',
        'Improved UI responsiveness using change detection optimizations',
        'Ensured accessibility for internal users with role-based workflows',
      ],
      techStack: [
        'AngularJS / Angular',
        'JavaScript / TypeScript',
        'HTML5',
        'SCSS',
      ],
      github: '',
      liveDemo: '',
    },
    {
      title: 'Global AskHR',
      duration: '2014 – 2015', // Adjust as needed
      description:
        'A global HR platform for managing, submitting, and tracking associate queries. Built to support search, categorization, and streamlined HR case resolution workflows.',
      contributions: [
        'Developed core search functionalities with advanced filters and relevance scoring',
        'Integrated HR case creation, tracking, and assignment workflows',
        'Optimized application performance and loading speed using lazy modules',
        'Worked with global HR stakeholders to define user-friendly interaction flows',
        'Built reusable UI components used across the HR toolset',
      ],
      techStack: ['Angular', 'TypeScript', 'RxJS', 'REST APIs', 'SCSS'],
      github: '',
      liveDemo: '',
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {
    // This constructor can be used for any additional initialization if needed
  }
}
