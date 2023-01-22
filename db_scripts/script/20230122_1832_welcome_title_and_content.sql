EXEC sp_rename 'dbo.Questionnaire.InitialStep', 'InitialStepTitle', 'COLUMN';
EXEC sp_rename 'dbo.Questionnaire.FinalStep', 'InitialStepContent', 'COLUMN';
GO

ALTER TABLE Questionnaire ADD FinalStepTitle NVARCHAR(1000) NULL
ALTER TABLE Questionnaire ADD FinalStepContent NVARCHAR(1000) NULL
GO