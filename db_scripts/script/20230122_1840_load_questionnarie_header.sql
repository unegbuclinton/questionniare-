
update Questionnaire 
set InitialStepTitle='WELCOME TO THE ENTREPRENEURIAL PREFILE',
InitialStepContent ='The main game of the Entrepreneur is to build a business that will eventually work without them being there – so they can have MORE Financial Freedom, Flexibility, Family time & FUN',
FinalStepTitle ='THANK YOU FOR COMPLETING THE ENTREPRENEURIAL PREFILE',
FinalStepContent='The main game of the Entrepreneur is to build a business that will eventually work without them being there – so they can have MORE Financial Freedom, Flexibility, Family time & FUN'
WHERE ID = (SELECT TOP 1 Id from Questionnaire ORDER BY ID)