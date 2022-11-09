const qnaList = [
    {
        q: '1. At a party do you',
        a: [
            { answer: 'A. Interact with many, including strangers', type: 'E'},
            { answer: 'B. Interact with a few, known to you', type: 'I'},
        ]
    },
    {
        q: '2. Are you more',
        a: [
            { answer: 'A. Realistic than speculative', type: 'S'},
            { answer: 'B. Speculative than realistic', type: 'N'},
        ]
    },
    {
        q: '3. Is it worse to',
        a: [
            { answer: 'A. Have your “head in the clouds"', type: 'S'},
            { answer: 'B. Be “in a rut”', type: 'N'},
        ]
    },
    {
        q: '4. Are you more impressed by',
        a: [
            { answer: 'A. Principles', type: 'T'},
            { answer: 'B. Emotions', type: 'F'},
        ]
    },
    {
        q: '5. Are more drawn toward the',
        a: [ 
            { answer: 'A. Convincing', type: 'T'},
            { answer: 'B. Touching', type: 'F'},
        ]
    },
    {
        q: '6. Do you prefer to work',
        a: [
            { answer: 'A. To deadlines', type: 'J'},
            { answer: 'B. Just “whenever', type: 'P'},
        ]
    },
    {
        q: '7. Do you tend to choose',
        a: [
            { answer: 'A. Rather carefully', type: 'J'},
            { answer: 'B. Somewhat impulsively', type: 'P'},
        ]
    },
    {
        q: '8. At parties do you',
        a: [
            { answer: 'A. Stay late, with increasing energy', type: 'E'},
            { answer: 'B. Leave early with decreased energy', type: 'I'},
        ]
    },
    {
        q: '9. Are you more attracted to',
        a: [
            { answer: 'A. Sensible people', type: 'S'},
            { answer: 'B. Imaginative people', type: 'N'},
        ]
    },
    {
        q: '10. Are you more interested in',
        a: [
            { answer: 'A. What is actual', type: 'S'},
            { answer: 'B. What is possible', type: 'N'},
        ]
    },
    {
        q: '11. In judging others are you more swayed by',
        a: [
            { answer: 'A. Laws than circumstances', type: 'T'},
            { answer: 'B. Circumstances than laws', type: 'F'},
        ]
    },
    {
        q: '12. In approaching others is your inclination to be somewhat',
        a: [
            { answer: 'A. Objective', type: 'T'},
            { answer: 'B. Personal', type: 'F'},
        ]
    },
    {
        q: '13. Are you more',
        a: [
            { answer: 'A. Punctual', type: 'J'},
            { answer: 'B. Leisurely', type: 'P'},
        ]
    },
    {
        q: '14. Does it bother you more having things',
        a: [
            { answer: 'A. Incomplete', type: 'J'},
            { answer: 'B. Completed', type: 'P'},
        ]
    },
    {
        q: '15. IIn your social groups do you',
        a: [
            { answer: 'A. Keep abreast of other\'s happenings', type: 'E'},
            { answer: 'B. Get behind on the news', type: 'I'},
        ]
    },
    {
        q: '16. IIn doing ordinary things are you more likely to',
        a: [
            { answer: 'A. Do it the usual way', type: 'S'},
            { answer: 'B. Do it your own way', type: 'N'},
        ]
    },
    {
        q: '17. Writers should',
        a: [
            { answer: 'A. \“Say what they mean and mean what they say\”', type: 'S'},
            { answer: 'B. Express things more by use of analogy', type: 'N'},
        ]
    },
    {
        q: '18. Which appeals to you more',
        a: [
            { answer: 'A. Consistency of thought', type: 'T'},
            { answer: 'B. Harmonious human relationships', type: 'F'},
        ]
    },
    {
        q: '19. Are you more comfortable in making',
        a: [
            { answer: 'A. Logical judgments', type: 'T'},
            { answer: 'B. Value judgments', type: 'F'},
        ]
    },
    {
        q: '20. Do you want things',
        a: [
            { answer: 'A. Settled and decided', type: 'J'},
            { answer: 'B. Unsettled and undecided', type: 'P'},
        ]
    },
    {
        q: '21. Would you say you are more',
        a: [
            { answer: 'A. Serious and determined', type: 'J'},
            { answer: 'B. Easy-going', type: 'P'},
        ]
    },
    {
        q: '22. In phoning do you',
        a: [
            { answer: 'A. Rarely question that it will all be said', type: 'E'},
            { answer: 'B. Rehearse what you’ll say', type: 'I'},
        ]
    },
    {
        q: '23. Facts',
        a: [
            { answer: 'A. “Speak for themselves”', type: 'S'},
            { answer: 'B. Illustrate principles', type: 'N'},
        ]
    },
    {
        q: '24. Are visionariest',
        a: [
            { answer: 'A. Somewhat annoying', type: 'S'},
            { answer: 'B. Rather fascinating', type: 'N'},
        ]
    },
    {
        q: '25. Are you more often',
        a: [
            { answer: 'A. a cool-headed person', type: 'T'},
            { answer: 'B. a warm-hearted person', type: 'F'},
        ]
    },
    {
        q: '26. Is it worse to bet',
        a: [
            { answer: 'A. unjust', type: 'T'},
            { answer: 'B. merciless', type: 'F'},
        ]
    },
    {
        q: '27. Should one usually let events occur',
        a: [
            { answer: 'A. by careful selection and choice', type: 'J'},
            { answer: 'B. randomly and by chance', type: 'P'},
        ]
    },
    {
        q: '28. Do you feel better about',
        a: [
            { answer: 'A. having purchased', type: 'J'},
            { answer: 'B. having the option to buy', type: 'P'},
        ]
    },
    {
        q: '29. In company do you',
        a: [
            { answer: 'A. initiate conversation', type: 'E'},
            { answer: 'B. wait to be approached', type: 'I'},
        ]
    },
    {
        q: '30. Common sense is',
        a: [
            { answer: 'A. rarely questionable', type: 'S'},
            { answer: 'B. frequently questionable', type: 'N'},
        ]
    },
    {
        q: '31. Children often do not',
        a: [
            { answer: 'A.  make themselves useful enough', type: 'S'},
            { answer: 'B. exercise their fantasy enough', type: 'N'},
        ]
    },
    {
        q: '32. In making decisions do you feel more comfortable with',
        a: [
            { answer: 'A. standards', type: 'T'},
            { answer: 'B. feelings', type: 'F'},
        ]
    },
    {
        q: '33. Are you more',
        a: [
            { answer: 'A. firm than gentle', type: 'T'},
            { answer: 'B. gentle than firm', type: 'F'},
        ]
    },
    {
        q: '34. Which is more admirablet',
        a: [
            { answer: 'A. the ability to organize and be methodical', type: 'J'},
            { answer: 'B. the ability to adapt and make do', type: 'P'},
        ]
    },
    {
        q: '35. Do you put more value on',
        a: [
            { answer: 'A. infinite', type: 'J'},
            { answer: 'B. open-minded', type: 'P'},
        ]
    },
    {
        q: '36. Does new and non-routine interaction with others',
        a: [
            { answer: 'A. stimulate and energize you', type: 'E'},
            { answer: 'B. tax your reserves', type: 'I'},
        ]
    },
    {
        q: '37. Are you more frequently',
        a: [
            { answer: 'A. a practical sort of person', type: 'S'},
            { answer: 'B. a fanciful sort of person', type: 'N'},
        ]
    },
    {
        q: '38. Are you more likely to',
        a: [
            { answer: 'A. see how others are useful', type: 'S'},
            { answer: 'B. see how others see', type: 'N'},
        ]
    },
    {
        q: '39. Which is more satisfying',
        a: [
            { answer: 'A. to discuss an issue thoroughly', type: 'T'},
            { answer: 'B. to arrive at agreement on an issue', type: 'F'},
        ]
    },
    {
        q: '40. Which rules you more',
        a: [
            { answer: 'A. your head', type: 'T'},
            { answer: 'B. your heart', type: 'F'},
        ]
    },
    {
        q: '41. Are you more comfortable with work that is',
        a: [
            { answer: 'A. contracted', type: 'J'},
            { answer: 'B. done on a casual basis', type: 'P'},
        ]
    },
    {
        q: '42. Do you tend to look for',
        a: [
            { answer: 'A. the orderly', type: 'J'},
            { answer: 'B. whatever turns up', type: 'P'},
        ]
    },
    {
        q: '43. Do you prefert',
        a: [
            { answer: 'A. many friends with brief contact', type: 'E'},
            { answer: 'B. a few friends with more lengthy contact', type: 'I'},
        ]
    },
    {
        q: '44. Do you go more by',
        a: [
            { answer: 'A. facts', type: 'S'},
            { answer: 'B. principles', type: 'N'},
        ]
    },
    {
        q: '45. Are you more interested in',
        a: [
            { answer: 'A. production and distribution', type: 'S'},
            { answer: 'B. design and research', type: 'N'},
        ]
    },
    {
        q: '46. Which is more of a compliment',
        a: [
            { answer: 'A. “There is a very logical person.”', type: 'T'},
            { answer: 'B. “There is a very sentimental person.”', type: 'F'},
        ]
    },
    {
        q: '47. Do you value in yourself more that you are',
        a: [
            { answer: 'A. unwavering', type: 'T'},
            { answer: 'B. devoted', type: 'F'},
        ]
    },
    {
        q: '48. Do you more often prefer the',
        a: [
            { answer: 'A. final and unalterable statement', type: 'J'},
            { answer: 'B. Persontentative and preliminary statement', type: 'P'},
        ]
    },
    {
        q: '49. Are you more comfortable',
        a: [
            { answer: 'A. after a decision', type: 'J'},
            { answer: 'B. before a decision', type: 'P'},
        ]
    },
    {
        q: '50. Do you',
        a: [
            { answer: 'A. speak easily and at length with strangers', type: 'E'},
            { answer: 'B. find little to say to strangers', type: 'I'},
        ]
    },
    {
        q: '51. Are you more likely to trust your',
        a: [
            { answer: 'A. experience', type: 'S'},
            { answer: 'B. hunch', type: 'N'},
        ]
    },
    {
        q: '52. Do you feel',
        a: [
            { answer: 'A. more practical than ingenious', type: 'S'},
            { answer: 'B. more ingenious than practical', type: 'N'},
        ]
    },
    {
        q: '53. Which person is more to be complimented \– one of',
        a: [
            { answer: 'A. clear reason', type: 'T'},
            { answer: 'B. strong feeling', type: 'F'},
        ]
    },
    {
        q: '54. Are you inclined more to be',
        a: [
            { answer: 'A. fair-minded', type: 'T'},
            { answer: 'B. sympathetic', type: 'F'},
        ]
    },
    {
        q: '55. Is it preferable mostly to',
        a: [
            { answer: 'A. make sure things are arranged', type: 'J'},
            { answer: 'B. just let things happen', type: 'P'},
        ]
    },
    {
        q: '56. In relationships should most things be',
        a: [
            { answer: 'A. re-negotiable', type: 'J'},
            { answer: 'B. random and circumstantial', type: 'P'},
        ]
    },
    {
        q: '57. When the phone rings do you',
        a: [
            { answer: 'A. hasten to get to it first', type: 'E'},
            { answer: 'B. hope someone else will answer', type: 'I'},
        ]
    },
    {
        q: '58. Do you prize more in yourself',
        a: [
            { answer: 'A. a strong sense of reality', type: 'S'},
            { answer: 'B. a vivid imagination', type: 'N'},
        ]
    },
    {
        q: '59. Are you drawn more to',
        a: [
            { answer: 'A. fundamentals', type: 'S'},
            { answer: 'B. overtones', type: 'N'},
        ]
    },
    {
        q: '60. Which seems the greater error',
        a: [
            { answer: 'A. to be too passionate', type: 'T'},
            { answer: 'B. to be too objective', type: 'F'},
        ]
    },
    {
        q: '61. Do you see yourself as basically',
        a: [
            { answer: 'A. hard-headed', type: 'T'},
            { answer: 'B. soft-hearted', type: 'F'},
        ]
    },
    {
        q: '62. Which situation appeals to you more',
        a: [
            { answer: 'A. the structured and scheduled', type: 'J'},
            { answer: 'B. the unstructured and unscheduled', type: 'P'},
        ]
    },
    {
        q: '63. Are you a person that is more',
        a: [
            { answer: 'A. routinized than whimsical', type: 'J'},
            { answer: 'B. whimsical than routinized', type: 'P'},
        ]
    },
    {
        q: '64. Are you more inclined to be',
        a: [
            { answer: 'A. easy to approach', type: 'I'},
            { answer: 'B. somewhat reserved', type: 'I'},
        ]
    },
    {
        q: '65. In writings do you prefer',
        a: [
            { answer: 'A. the more literal', type: 'S'},
            { answer: 'B. the more figurative', type: 'N'},
        ]
    },
    {
        q: '66. Is it harder for you to',
        a: [
            { answer: 'A. identify with others', type: 'S'},
            { answer: 'B. utilize others', type: 'N'},
        ]
    },
    {
        q: '67. Which do you wish more for yourself',
        a: [
            { answer: 'A. clarity of reason', type: 'T'},
            { answer: 'B. strength of compassion', type: 'F'},
        ]
    },
    {
        q: '68. Which is the greater fault',
        a: [
            { answer: 'A. being indiscriminate', type: 'T'},
            { answer: 'B. being critical', type: 'F'},
        ]
    },
    {
        q: '69. Do you prefer the',
        a: [
            { answer: 'A. planned event', type: 'J'},
            { answer: 'B. unplanned event', type: 'P'},
        ]
    },
    {
        q: '70. Do you tend to be more',
        a: [
            { answer: 'A. deliberate than spontaneous', type: 'J'},
            { answer: 'B. spontaneous than deliberate', type: 'P'},
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