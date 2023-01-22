--select * from Questionnaire
--select * from QuestionnaireItem

BEGIN TRAN

INSERT INTO QuestionnaireItem (QuestionnaireId,
	Title,
	Subtitle,
	Question,
	ImageUrl,
	[Order])
VALUES
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'CLARITY ON AND EMOTIONAL ATTACHMENT TO A BIG IDEA',--TITLE
	'Where am I heading? Am I completely clear on what I want most?',--SUBTITLE
	'Where am I heading? Am I completely clear on what I want most?',--QUESTION
	NULL,
	1
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'BEING TOTALLY ORGANISED', --TITLE
	'I MAXIMISE MY RESULTS every single day by being PRODUCTIVE', --SUBTITLE
	'I MAXIMISE MY RESULTS every single day by being PRODUCTIVE', --QUESTION
	NULL,
	2
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'ALWAYS WORKING ON AND IMPROVING MY MIDAS MINDSET', --TITLE
	'Always ATTRACTING WHAT I WANT instead of focussing on what I don’t want', --SUBTITLE
	'Always ATTRACTING WHAT I WANT instead of focussing on what I don’t want', --QUESTION
	NULL,
	3
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'IMPROVE AND LEVERAGE OFF MY CRITICAL NUMBERS', --TITLE
	'The ultimate DASHBOARD on the PERFORMANCE of my business, and ME', --SUBTITLE
	'The ultimate DASHBOARD on the PERFORMANCE of my business, and ME', --QUESTION
	NULL,
	4
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'UNDERSTANDING MY BUSINESS MODEL', --TITLE
	'How will my business look when I reach the BIG IDEA?', --SUBTITLE
	'How will my business look when I reach the BIG IDEA?', --QUESTION
	NULL,
	5
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'INVESTING ABOVE 20% OF MY TIME WORKING ‘ON’ MY BUSINESS', --TITLE
	'It is the ONLY way to ensure CONSTANT GROWTH', --SUBTITLE
	'It is the ONLY way to ensure CONSTANT GROWTH', --QUESTION
	NULL,
	6
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'DEFINING MY MAGNETIC MESSAGE/POINT OF DIFFERENCE', --TITLE
	'Putting my business HEAD AND SHOULDERS ABOVE all competitors', --SUBTITLE
	'Putting my business HEAD AND SHOULDERS ABOVE all competitors', --QUESTION
	NULL,
	7
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'BUILDING & REFINING MY VISIBILITY PLAN', --TITLE
	'Delivering leads into my business EVERY DAY', --SUBTITLE
	'Delivering leads into my business EVERY DAY', --QUESTION
	NULL,
	8
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'DE-MYSTIFYING DIGITAL MARKETING', --TITLE
	'Understanding the ONLINE world and how I can learn & LEVERAGE from it', --SUBTITLE
	'Understanding the ONLINE world and how I can learn & LEVERAGE from it', --QUESTION
	NULL,
	9
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'PERFECTING MY SKILL BASE ON HOW TO SELL', --TITLE
	'The HIGHEST PAID skill I can have', --SUBTITLE
	'The HIGHEST PAID skill I can have', --QUESTION
	NULL,
	10
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'MY SALES CONVERSION SYSTEM', --TITLE
	'Sales Mastery - converting more leads to SALES', --SUBTITLE
	'Sales Mastery - converting more leads to SALES', --QUESTION
	NULL,
	11
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'DELIVERING AWESOME CLIENT EXPERIENCES', --TITLE
	'Deliver more REFERRALS to you – the best sales', --SUBTITLE
	'Deliver more REFERRALS to you – the best sales', --QUESTION
	NULL,
	12
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'CREATING MY REPLICABLE PILOT MODEL', --TITLE
	'Replication of my business systems and ME so I can scale', --SUBTITLE
	'Replication of my business systems and ME so I can scale', --QUESTION
	NULL,
	13
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'ATTRACT AND RETAIN PEOPLE WITH STAR QUALITY', --TITLE
	'There ARE good staff out there –FIND them & KEEP them', --SUBTITLE
	'There ARE good staff out there –FIND them & KEEP them', --QUESTION
	NULL,
	14
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'THE BUSINESS IS CAPITALISED', --TITLE
	'I always have (or can easily find) the CAPITAL TO GROW', --SUBTITLE
	'I always have (or can easily find) the CAPITAL TO GROW', --QUESTION
	NULL,
	15
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'I AM THE FINANCIAL CONTROLLER OF ALL REVENUE', --TITLE
	'I ensure the ebb and flow of CASH IS IN MY TOTAL CONTROL and money is always available and its utilization is maximised to reach my BIG IDEA', --SUBTITLE
	'I ensure the ebb and flow of CASH IS IN MY TOTAL CONTROL and money is always available and its utilization is maximised to reach my BIG IDEA', --QUESTION
	NULL,
	16
	),
	((SELECT TOP 1 Id FROM Questionnaire), --QUESTIONNARIE ID
	'MY BUSINESS WORKS WITHOUT ME', --TITLE
	'THE MAIN AIM OF MY MAIN GAME', --SUBTITLE
	'THE MAIN AIM OF MY MAIN GAME', --QUESTION
	NULL,
	17
	)

COMMIT