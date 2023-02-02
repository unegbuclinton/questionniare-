CREATE TABLE [ReportResult] (
  [Id] int PRIMARY KEY IDENTITY(1, 1),
  [MinScore] int NOT NULL,
  [MaxScore] int NOT NULL,
  [Comment] varchar(4000) NOT NULL,
  [GroupPct] decimal(18,2)
)
GO

INSERT INTO "ReportResult" ("MinScore", "MaxScore", "Comment", "GroupPct")
VALUES (0,58,'You are a DIAMOND IN THE ROUGH. Get clarity on where you want to go and then in small simple steps follow the BUSINESS IMPROVEMENT ACADEMY SUCCESS SYSTEM. Spend more time working “ON” your business. Focus on your Magnetic Message and visibility to gain more new clients and build your cashflow. Become totally committed to doing what the business needs you to do each day. Learn fast from people who have been there before and your journey will be much easier and less costly in time and money.', NULL),
(59,89,'You are on the launch pad and ready to go. It’s up to you to do what’s required to grow and less focus on what’s required to survive. As difficult as it may appear, it is a lot easier than it seems provided you implement your strategic plan and push forward with Sales and Marketing strategies. More activity on what your BIG IDEA requires and less focus on the lack of money and better outcomes will emerge and sustain you. The BUSINESS IMPROVEMENT ACADEMY Y has the answers you crave. Lift your commitment to your BIG IDEA and follow the proven BUSINESS IMPROVEMENT ACADEMY SUCCESS SYTEM and you’ll see change in a week, results in a month and you’ll be amazed and astounded at where you’ll be in 12 month’s time.', 65),
(90,126,'You are doing many of the right things, however there is much more that can and needs to be done. Increase your commitment to the strategies, concepts and ideas within TEWAY and your growth will accelerate. Eliminate the distractions, put more focus into actions and systems that will grow the business and start figuring out how others can do the work.',50),
(127,152,'You have made great progress and should indeed be proud of yourself so far. Never stop believing you will get to your Big Idea. This is where your 6-8 scores must now be refined and your rate of progress will increase. Otherwise the growth you want will allude you. Increase your EMOTIONAL ATTACHMENT on your BIG IDEA, lock into the BUSINESS IMPROVEMENT ACADEMY SUCCESS SYSTEM and all you seek will arrive.',25),
(153,160,'You are IN THE ZONE - Your individual strategy scores tell you where the work is required. Leverage off what is currently working and continue to improve your weaker areas. Each SUCCESS strategy has the answers you need to do this so commit to use them to your very best advantage.',10),
(161,170,'You already are a superstar and will have a NET WORTH and income to match. There is still more for you to reach out and make happen. Get ready for the next level that is waiting for you. Perfect your weaker scores and it will all improve to an even better place.', 5)
