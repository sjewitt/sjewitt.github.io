let engine = {
	/* do an array mapping data-rating to a colour, and set the element background colour to be that...
	TODO:
	 - main titles data attr
	 = sector description (to add, all )
	 - rating (to collect, per concentric thing)
	 [
	     quadrant, if not -1
	     sector TITLE if not -1
	     sector BODY if not -1
	 ]
	*/
	
	/* display data */
/** 
 * quadrant descriptions
 
 I need to be REALLY careful to map these indexes correctly!
 Assume hotspots are defined clockwise from 12:00, but the spreadsheet 
 data is not that order...
 
 */
	data_0 : [
	    'Includes Proposition Design, Product Design, Digital and Physical Experience Design',
	    'How we influence people to get stuff done',
	    'Providing clients with the tools they need to achieve their goals.',
	    'What skills do you have that can support our clients in their ambitions to change their business?'
	],

	/**
	 * sector title descriptions within each quadrant
	 */
	data_1 : [
	    [
	        'Understanding how to originate, encourage and communicate complex ideas and concepts with simplicity and clarity.',
	        'Ability to use tools that will reduce uncertainty and test hypotheses',
	        'Skills in the creation and definition of functional, usable and simplified user experiences',
	        'Skills in the creation of beautiful and functional things using the right tools.',
	        'Skills in the creation of interactions over time that make our clients stand out in the minds of their customers'
	    ],
	    [
	        'Building effective, successful and long lasting relationships',
	        'Understanding the impact of decisions we make on the business from a financial, risk and regulatory perspective.',
	        'Effective use of the tools and rituals involved in running lean and agile projects with a focus on people and results',
	        'Skills in running virtual and in person workshops to smoothly and simply achieve the stated goals.'
	    ],
	    [
			'Know how to enable our clients businesses to become more innovative',
			'Understand the skills our client needs to exceed expectations in their next role. Know how to support them to get there.',
	        'Ability to share knowledge and guide people to reach their full potential',
	        'Creation and delivery of training in our tools and techniques',
	        
	    ],
	    [
	        'How you research, define and bring to life the desired future state of our client.',
	        'Using powerful storytelling to influence the behaviours of people who make up the client’s business.',
	        'Understanding which tools will accelerate the client’s ability to achieve their future vision and using them to predict the effect on customer behaviour.',
	        'Use of varied research skills to understand the needs, wants and desires of customers.'
	    ],
	],

	/** 
	 * sector area descriptions - applies to all concentric levels
	 */
	data_2 : [
	    [
	        'Has experience of using a variety of tools to generate ideas and concepts. Can plan and lead an ideation workshop. Understands how to create \'just enough\' to show the viability / art of the possible in the idea we are communicating.',
	        'Use tools that will reduce uncertainty and test hypotheses. Understand the different types of experiments and their suitability. Communicate the plan, hypothesis and outcomes with clients Analyse results in various formats.',
	        'Independently create and define functional, usable and simplified user experiences. Understand of the importance of designing for accessibility Communicate the thought behind the design and work collaboratively to achieve sign off.',
	        'Shape and drive of visual outcomes throughout the course of a project Communicate the thought behind the design and work collaboratively to achieve sign off. Review the work of junior designers and give feedback to improve',
	        'Own end-to-end user journey Understand the user needs and foresee painpoints to deliver desiered organisational needs Ability to communicate the thought behind the design and work collaboratively to achieve sign off.'
	    ],
	    [
	        'Demonstrate the ability to plan lead, facilitate, and deliver a workshop with positive, on-brief outcomes Lead and sign off on the work of others.',
	        'Coach others and gain buy-in from clients and teams (client and internal) for Agile ways of working. Deliver medium-sized projects successfully. Manage simultaneous engagements successfully',
	        'build relationships with prospective clients, maintain relationships with existing clients, regularly share interesting insights with their network, spot and qualify opportunities. broker introductions to relevant Magnets and others in the Magnetic network.',
	        'Liasie effectively and in a timely manner with finance, produce high-quality commercial documentation and reports such as SOW and project tracker. Keep track of the numbers week in and week out. Understanding of contracts and procurement. They understand the impact of commercial decisions on the wider business,'
	    ],
	    [
	        'Is able to lead training sessions on our core tools. Is confident in using real life stories in training. Gets the balance right between showing and telling and leads training sessions with a focus on interaction and discussion over lecturing and slideware. Is able to pivot a session to meet the requirements of the trainees.',
	        'Share their skills with colleagues and set a good example as needed. Actively listen to colleagues and asks questions to help guide them to their own solutions. Understands the difference between coaching and mentoring and when to use that approach',
	        'Role models soft skills, values and behaviours the clients can emulate (Setting a great example). Receive feedback from clients saying they\'ve learned by doing when they worked with you. Confidently coach others',
	        'Is able to assess the current innovation capability of a department / group / team and advise on what structural changes and training is needed to enable them to become more innovative.'
	    ],
	    [
	        'Define the strategic change for a project within a well defined scope. Define the strategy for a part of a business or product',
	        'Independently create a plan for influencing cultural change. Use tools like experience mapping to define and plan a new or improved experience. Be able to use storytelling to influence adoption of new behaviours.',
	        'Understands the intersection between viability, desirability, feasibility and integrity (impact). Knows how to bridge the gap between customer desirability and business-model viability. Plans and communicates what the business impact of our projects will be. ',
	        'Independently carry out customer interviews and actively participate in synthesis sessions. Contribute to creation of discussion guides and development of other research/insight techniques. Carry out research on customers within a well understood scope. Research and create insights about an aspect of a service'
	    ]
	],
	
	/**
	 * ratings  TODO:
	 */
	data_3 : [
	    [[],[],[],[],[],[]],
	],


	/* element id data */
	elems : [
		'q-1',
			's1-t',
				's1-1',
				's1-2',
				's1-3',
				's1-4',
				's1-5',
				's1-6',
			's2-t',
				's2-1',
				's2-2',
				's2-3',
				's2-4',
				's2-5',
				's2-6',
			's3-t',
			's4-t',
			's5-t',
		'q-2',
			's6-t',
			's7-t',
			's8-t',
			's9-t',
		
	
		'q-3',
			's10-t',
			's11-t',
			's12-t',
			's13-t',
	
		'q-4',
			's14-t',
			's15-t',
			's16-t',
			's17-t'
		],
		
	init : function(){
		console.log('starting...');
		for(id of this.elems){
			elem = document.getElementById(id)
			elem.addEventListener('mouseover',this.test_in)
			elem.addEventListener('mouseout',this.test_out);
			elem.addEventListener('click',this.test_handler)
		}	
	},
	
	test_handler : function(){
		console.log('shove it in a database...');
	},
	
	test_in : function(){
		console.log('IN')
		let sector_rating = -1;
	    let lookup = JSON.parse(this.getAttribute('data-lookup')); // expects a string of '[n,n,n]' where n is integer
	    /** quadrant */
	    let quad_description = false;
	    console.log(lookup)
	    if(lookup[0] > -1){
			console.log('data_0: quadrant ',lookup[0])
	        quad_description = engine.data_0[lookup[0]];
	    }
	    
	    /** sector titles */
	    let sector_title_description = false;
		if(lookup[1] > -1){
			console.log('data_1: sector ',lookup[0],lookup[1])
		    sector_title_description = engine.data_1[lookup[0]][lookup[1]];
		}
		
		/** sector blocks (all) */
		let sector_block_description = false;
		if(lookup[2] > -1){
			sector_rating = parseInt(this.getAttribute('data-rating'));
			console.log('data_2: sector ',lookup[2], 'rating: ',sector_rating)
		    sector_block_description = engine.data_2[lookup[0]][lookup[2]];
		}
		let outputData = [quad_description,sector_title_description,sector_block_description]
		console.log(quad_description);
		console.log(sector_title_description);
		console.log(sector_block_description);
		
		let output = '';
		let output_rating = '';
		if(sector_rating > -1){
			output_rating = sector_rating;
		}
		for(thing of outputData){
			if(thing){
				output += thing + '\n\n'
			}
		}
		
		//document.getElementById('description').innerText = this.getAttribute('data-description');
		//document.getElementById('rating').innerText = this.getAttribute('data-rating');
		document.getElementById('description').innerText = output;
		document.getElementById('rating').innerText = output_rating;
//		quad_description 
//		+  "\n " + sector_title_description
//		+  "\n " + sector_block_description;
		console.log(engine.data_1[lookup[0]][lookup[1]])
	},
	
	test_out : function(){
		console.log('OUT')
		document.getElementById('description').innerText = "";
		document.getElementById('rating').innerText = "";
	
	},
}


engine.init();
