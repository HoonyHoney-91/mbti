const qnaList = [
    {
        q: '1. At a party do you',
        a: [
            { answer: 'A. Interact with many, including strangers', type: ['E']},
            { answer: 'B. Interact with a few, known to you', type: ['I']},
        ]
    },
    {
        q: '2. At parties do you',
        a: [
            { answer: 'A. Stay late, with increasing energy', type: ['E']},
            { answer: 'B. Leave early with decreased energy', type: ['I']},
        ]
    },
    {
        q: '3. In your social groups do you',
        a: [
            { answer: 'A. Keep abreast of other\'s happenings', type: ['E']},
            { answer: 'B. Get behind on the news', type: ['I']},
        ]
    },
    {
        q: '4. In phoning do you',
        a: [
            { answer: 'A. Rarely question that it will all be said', type: ['E']},
            { answer: 'B. Rehearse what you’ll say', type: ['I']},
        ]
    },
    {
        q: '5. In company do you',
        a: [
            { answer: 'A. initiate conversation', type: ['E']},
            { answer: 'B. wait to be approached', type: ['I']},
        ]
    },
    {
        q: '6. Does new and non-routine interaction with others',
        a: [
            { answer: 'A. stimulate and energize you', type: ['E']},
            { answer: 'B. tax your reserves', type: ['I']},
        ]
    },
    {
        q: '7. Do you prefert',
        a: [
            { answer: 'A. many friends with brief contact', type: ['E']},
            { answer: 'B. a few friends with more lengthy contact', type: ['I']},
        ]
    },
    {
        q: '8. Do you',
        a: [
            { answer: 'A. speak easily and at length with strangers', type: ['E']},
            { answer: 'B. find little to say to strangers', type: ['I']},
        ]
    },
    {
        q: '9. When the phone rings do you',
        a: [
            { answer: 'A. hasten to get to it first', type: ['E']},
            { answer: 'B. hope someone else will answer', type: ['I']},
        ]
    },
    {
        q: '10. Are you more inclined to be',
        a: [
            { answer: 'A. easy to approach', type: ['E']},
            { answer: 'B. somewhat reserved', type: ['I']},
        ]
    },
    {
        q: '11. Are you more',
        a: [
            { answer: 'A. Realistic than speculative', type: ['S']},
            { answer: 'B. Speculative than realistic', type: ['N']},
        ]
    },
    {
        q: '12. Is it worse to',
        a: [
            { answer: 'A. Have your “head in the clouds"', type: ['S']},
            { answer: 'B. Be “in a rut”', type: ['N']},
        ]
    },
    {
        q: '13. Are you more attracted to',
        a: [
            { answer: 'A. Sensible people', type: ['S']},
            { answer: 'B. Imaginative people', type: ['N']},
        ]
    },
    {
        q: '14. Are you more interested in',
        a: [
            { answer: 'A. What is actual', type: ['S']},
            { answer: 'B. What is possible', type: ['N']},
        ]
    },
    {
        q: '15. IIn doing ordinary things are you more likely to',
        a: [
            { answer: 'A. Do it the usual way', type: ['S']},
            { answer: 'B. Do it your own way', type: ['N']},
        ]
    },
    {
        q: '16. Writers should',
        a: [
            { answer: 'A. \“Say what they mean and mean what they say\”', type: ['S']},
            { answer: 'B. Express things more by use of analogy', type: ['N']},
        ]
    },
    {
        q: '17. Facts',
        a: [
            { answer: 'A. “Speak for themselves”', type: ['S']},
            { answer: 'B. Illustrate principles', type: ['N']},
        ]
    },
    {
        q: '18. Are visionariest',
        a: [
            { answer: 'A. Somewhat annoying', type: ['S']},
            { answer: 'B. Rather fascinating', type: ['N']},
        ]
    },
    {
        q: '19. Common sense is',
        a: [
            { answer: 'A. Rarely questionable', type: ['S']},
            { answer: 'B. Frequently questionable', type: ['N']},
        ]
    },
    {
        q: '20. Children often do not',
        a: [
            { answer: 'A. Make themselves useful enough', type: ['S']},
            { answer: 'B. Exercise their fantasy enough', type: ['N']},
        ]
    },
    {
        q: '21. Are you more frequently',
        a: [
            { answer: 'A. A practical sort of person', type: ['S']},
            { answer: 'B. A fanciful sort of person', type: ['N']},
        ]
    },
    {
        q: '22. Are you more likely to',
        a: [
            { answer: 'A. See how others are useful', type: ['S']},
            { answer: 'B. See how others see', type: ['N']},
        ]
    },
    {
        q: '23. Do you go more by',
        a: [
            { answer: 'A. Facts', type: ['S']},
            { answer: 'B. Principles', type: ['N']},
        ]
    },
    {
        q: '24. Are you more interested in',
        a: [
            { answer: 'A. Production and distribution', type: ['S']},
            { answer: 'B. Design and research', type: ['N']},
        ]
    },
    {
        q: '25. Are you more likely to trust your',
        a: [
            { answer: 'A. Experience', type: ['S']},
            { answer: 'B. Hunch', type: ['N']},
        ]
    },
    {
        q: '26. Do you feel',
        a: [
            { answer: 'A. More practical than ingenious', type: ['S']},
            { answer: 'B. More ingenious than practical', type: ['N']},
        ]
    },
    {
        q: '27. Do you prize more in yourself',
        a: [
            { answer: 'A. A strong sense of reality', type: ['S']},
            { answer: 'B. A vivid imagination', type: ['N']},
        ]
    },
    {
        q: '28. Are you drawn more to',
        a: [
            { answer: 'A. Fundamentals', type: ['S']},
            { answer: 'B. Overtones', type: ['N']},
        ]
    },
    {
        q: '29. In writings do you prefer',
        a: [
            { answer: 'A. The more literal', type: ['S']},
            { answer: 'B. The more figurative', type: ['N']},
        ]
    },
    {
        q: '30. Is it harder for you to',
        a: [
            { answer: 'A. Identify with others', type: ['S']},
            { answer: 'B. Utilize others', type: ['N']},
        ]
    },
    {
        q: '31. Are you more impressed by',
        a: [
            { answer: 'A. Principles', type: ['T']},
            { answer: 'B. Emotions', type: ['F']},
        ]
    },
    {
        q: '32. Are more drawn toward the',
        a: [ 
            { answer: 'A. Convincing', type: ['T']},
            { answer: 'B. Touching', type: ['F']},
        ]
    },
    {
        q: '33. In judging others are you more swayed by',
        a: [
            { answer: 'A. Laws than circumstances', type: ['T']},
            { answer: 'B. Circumstances than laws', type: ['F']},
        ]
    },
    {
        q: '34. In approaching others is your inclination to be somewhat',
        a: [
            { answer: 'A. Objective', type: ['T']},
            { answer: 'B. Personal', type: ['F']},
        ]
    },
    {
        q: '35. Which appeals to you more',
        a: [
            { answer: 'A. Consistency of thought', type: ['T']},
            { answer: 'B. Harmonious human relationships', type: ['F']},
        ]
    },
    {
        q: '36. Are you more comfortable in making',
        a: [
            { answer: 'A. Logical judgments', type: ['T']},
            { answer: 'B. Value judgments', type: ['F']},
        ]
    },
    {
        q: '37. Are you more often',
        a: [
            { answer: 'A. A cool-headed person', type: ['T']},
            { answer: 'B. A warm-hearted person', type: ['F']},
        ]
    },
    {
        q: '38. Is it worse to bet',
        a: [
            { answer: 'A. Unjust', type: ['T']},
            { answer: 'B. Merciless', type: ['F']},
        ]
    },
    {
        q: '39. In making decisions do you feel more comfortable with',
        a: [
            { answer: 'A. Standards', type: ['T']},
            { answer: 'B. Feelings', type: ['F']},
        ]
    },
    {
        q: '40. Are you more',
        a: [
            { answer: 'A. Firm than gentle', type: ['T']},
            { answer: 'B. Gentle than firm', type: ['F']},
        ]
    },
    {
        q: '41. Which is more satisfying',
        a: [
            { answer: 'A. To discuss an issue thoroughly', type: ['T']},
            { answer: 'B. To arrive at agreement on an issue', type: ['F']},
        ]
    },
    {
        q: '42. Which rules you more',
        a: [
            { answer: 'A. Your head', type: ['T']},
            { answer: 'B. Your heart', type: ['F']},
        ]
    },
    {
        q: '43. Which is more of a compliment',
        a: [
            { answer: 'A. “There is a very logical person.”', type: ['T']},
            { answer: 'B. “There is a very sentimental person.”', type: ['F']},
        ]
    },
    {
        q: '44. Do you value in yourself more that you are',
        a: [
            { answer: 'A. Unwavering', type: ['T']},
            { answer: 'B. Devoted', type: ['F']},
        ]
    },
    {
        q: '45. Which person is more to be complimented \– one of',
        a: [
            { answer: 'A. Clear reason', type: ['T']},
            { answer: 'B. Strong feeling', type: ['F']},
        ]
    },
    {
        q: '46. Are you inclined more to be',
        a: [
            { answer: 'A. Fair-minded', type: ['T']},
            { answer: 'B. Sympathetic', type: ['F']},
        ]
    },
    {
        q: '47. Which seems the greater error',
        a: [
            { answer: 'A. To be too passionate', type: ['T']},
            { answer: 'B. To be too objective', type: ['F']},
        ]
    },
    {
        q: '48. Do you see yourself as basically',
        a: [
            { answer: 'A. Hard-headed', type: ['T']},
            { answer: 'B. Soft-hearted', type: ['F']},
        ]
    },
    {
        q: '49. Which do you wish more for yourself',
        a: [
            { answer: 'A. Clarity of reason', type: ['T']},
            { answer: 'B. Strength of compassion', type: ['F']},
        ]
    },
    {
        q: '50. Which is the greater fault',
        a: [
            { answer: 'A. Being indiscriminate', type: ['T']},
            { answer: 'B. Being critical', type: ['F']},
        ]
    },
    {
        q: '51. Do you prefer to work',
        a: [
            { answer: 'A. To deadlines', type: ['J']},
            { answer: 'B. Just “whenever', type: ['P']},
        ]
    },
    {
        q: '52. Do you tend to choose',
        a: [
            { answer: 'A. Rather carefully', type: ['J']},
            { answer: 'B. Somewhat impulsively', type: ['P']},
        ]
    },
    {
        q: '53. Are you more',
        a: [
            { answer: 'A. Punctual', type: ['J']},
            { answer: 'B. Leisurely', type: ['P']},
        ]
    },
    {
        q: '54. Does it bother you more having things',
        a: [
            { answer: 'A. Incomplete', type: ['J']},
            { answer: 'B. Completed', type: ['P']},
        ]
    },
    {
        q: '55. Do you want things',
        a: [
            { answer: 'A. Settled and decided', type: ['J']},
            { answer: 'B. Unsettled and undecided', type: ['P']},
        ]
    },
    {
        q: '56. Would you say you are more',
        a: [
            { answer: 'A. Serious and determined', type: ['J']},
            { answer: 'B. Easy-going', type: ['P']},
        ]
    },
    {
        q: '57. Should one usually let events occur',
        a: [
            { answer: 'A. By careful selection and choice', type: ['J']},
            { answer: 'B. Randomly and by chance', type: ['P']},
        ]
    },
    {
        q: '58. Do you feel better about',
        a: [
            { answer: 'A. Having purchased', type: ['J']},
            { answer: 'B. Having the option to buy', type: ['P']},
        ]
    },
    {
        q: '59. Which is more admirablet',
        a: [
            { answer: 'A. The ability to organize and be methodical', type: ['J']},
            { answer: 'B. The ability to adapt and make do', type: ['P']},
        ]
    },
    {
        q: '60. Do you put more value on',
        a: [
            { answer: 'A. Infinite', type: ['J']},
            { answer: 'B. Open-minded', type: ['P']},
        ]
    },
    {
        q: '61. Are you more comfortable with work that is',
        a: [
            { answer: 'A. Contracted', type: ['J']},
            { answer: 'B. Done on a casual basis', type: ['P']},
        ]
    },
    {
        q: '62. Do you tend to look for',
        a: [
            { answer: 'A. The orderly', type: ['J']},
            { answer: 'B. Whatever turns up', type: ['P']},
        ]
    },
    {
        q: '63. Do you more often prefer the',
        a: [
            { answer: 'A. Final and unalterable statement', type: ['J']},
            { answer: 'B. Tentative and preliminary statement', type: ['P']},
        ]
    },
    {
        q: '64. Are you more comfortable',
        a: [
            { answer: 'A. After a decision', type: ['J']},
            { answer: 'B. Before a decision', type: ['P']},
        ]
    },
    {
        q: '65. Is it preferable mostly to',
        a: [
            { answer: 'A. Make sure things are arranged', type: ['J']},
            { answer: 'B. Just let things happen', type: ['P']},
        ]
    },
    {
        q: '66. In relationships should most things be',
        a: [
            { answer: 'A. Re-negotiable', type: ['J']},
            { answer: 'B. Random and circumstantial', type: ['P']},
        ]
    },
    {
        q: '67. Which situation appeals to you more',
        a: [
            { answer: 'A. The structured and scheduled', type: ['J']},
            { answer: 'B. The unstructured and unscheduled', type: ['P']},
        ]
    },
    {
        q: '68. Are you a person that is more',
        a: [
            { answer: 'A. Routinized than whimsical', type: ['J']},
            { answer: 'B. Whimsical than routinized', type: ['P']},
        ]
    },
    {
        q: '69. Do you prefer the',
        a: [
            { answer: 'A. Planned event', type: ['J']},
            { answer: 'B. Unplanned event', type: ['P']},
        ]
    },
    {
        q: '70. Do you tend to be more',
        a: [
            { answer: 'A. Deliberate than spontaneous', type: ['J']},
            { answer: 'B. Spontaneous than deliberate', type: ['P']},
        ]
    },
]

const infoList = [
    {
        name: 'ISTJ',
        desc: 'Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized - their work, their home, their life. Value traditions and loyalty.'
    },
    {
        name: 'ISFJ',
        desc: 'Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.'
    },
    {
        name: 'INFJ',
        desc: 'Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.'
    },
    {
        name: 'INTJ',
        desc: 'Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance - for themselves and others.'
    },
    {
        name: 'ISTP',
        desc: 'Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency.'
    },
    {
        name: 'ISFP',
        desc: 'Quiet, friendly, sensitive, and kind. Enjoy the present moment, what\'s going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others.'
    },
    {
        name: 'INFP',
        desc: 'Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened.'
    },
    {
        name: 'INTP',
        desc: 'Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.'
    },
    {
        name: 'ESTP',
        desc: 'Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them - they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others. Enjoy material comforts and style. Learn best through doing.'
    },
    {
        name: 'ESFP',
        desc: 'Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people.'
    },
    {
        name: 'ENFP',
        desc: 'Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.'
    },
    {
        name: 'ENTP',
        desc: 'Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.'
    },
    {
        name: 'ESTJ',
        desc: 'Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans.'
    },
    {
        name: 'ESFJ',
        desc: 'Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.'
    },
    {
        name: 'ENFJ',
        desc: 'Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.'
    },
    {
        name: 'ENTJ',
        desc: 'Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas.'
    },

]