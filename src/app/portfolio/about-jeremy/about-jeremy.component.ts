import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-jeremy',
  templateUrl: './about-jeremy.component.html',
  styleUrls: ['./about-jeremy.component.scss']
})
export class AboutJeremyComponent implements OnInit {
  references = [
    {
      quote: 'I\'ve known Jeremy for 15+ years and have worked closely with him on several complex web projects the past 6 years.  As a mostly .NET back-end developer myself, Jeremy has been incredibly valuable for providing both creative big-picture direction as well as being the lead designer (css/html) and constantly pushing himself to learn the latest techniques/technologies.   The past few years he has really branched out into learning more complex program languages/technologies such as Javascript / Typescript / Angular / REST / Dotnet / SQL etc.. and is ready to dip his toes in Full Stack waters.  I have no doubt Jeremy can provide a company with a unique perspective/creative approach to a team and has the mindset and skill that any good developer would need.',
      name: 'Troy Ross',
      title: 'Technical Architect, Rapp Worldwide Marketing Agency'
    },
    {
      quote: 'Jeremy is my favorite kind of front-end developer to work with: a true creative partner, curious and brimming with new ideas to expand our approach, but also happy to take direct instruction and get the job done when it’s time to deliver. I worked with Jeremy on two very challenging freelance projects, and was so happy with his work and his collaboration.',
      name: 'Jason Robinson',
      title: 'Sr UX Designer, A game studio in Seattle'
    },
    {
      quote: 'I am so glad that (we) brought Jeremy to these projects. We have gotten so much praise for Defunct\'s design and aesthetic. It decays! The website delights everyone...the guys outdid themselves. Oblivion\'s site has a logic game, a writing contest and more...both websites are so easy to navigate, and unlike anything else on the internet. Fun and functional.',
      name: 'Erin Stalcup',
      title: 'Core Faculty, Long Island University'
    },
    {
      quote: 'Front-end devs tend either to be "Yes" developers or "No" developers. The "no" developers are often competent, and have sharpened their skills through years of running into problems and then solving for them — but many have in that process also become problem-averse, which also means there\'s no room for inspiration or innovation, which are by nature threatening. The "yes" developers are exploratory, always keeping up with latest trends and ideas, bending rules, finding new paths, discovering — but many have (how shall I say this?) a lack of taste, and also can\'t stomach building the simple straight path forward, even if that\'s truly the best answer in the moment. My favorite dev partners & best work have come out of collaboration with devs who can see ALL the possibilities, and are willing to explore them — but then also to curate & focus & receive instruction once the direction is clear. Hold on to that as you grow in experience. I\'m so grateful I got to work you on this!',
      //name: 'Dan Higham',
      //   title: 'Sr Customer Solutions Architect, Sysdig'
       name: '--Note to Jeremy',
      title: 'Project Architect'
    },
    // {
    //   quote: '',
    //   //    name: 'Robin Hemley',
    //   //  title: 'Director, Polk School of Communications, Long Island University'
    //   name: 'First Name, Last Name',
    //   title: 'Title, Company'
    // },
    // {
    //   quote: '',
    //   //  name: 'Tom Lucero',
    //   //  title: 'Technical Strategist'
    //   name: 'First Name, Last Name',
    //   title: 'Title, Company'
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
