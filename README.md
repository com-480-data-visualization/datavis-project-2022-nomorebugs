# Project of Data Visualization (COM-480)

| Student's name | SCIPER |
| -------------- | ------ |
| Yanni Zhang    | 336558 |
| Xiaoyu Chen    | 337263 |
| Sixiao Xu      | 338094 |

[Milestone 1](#milestone-1-friday-3rd-april-5pm) • [Milestone 2](#milestone-2-friday-6th-may-5pm) • Milestone 3

# Milestone 1 (Friday 3rd April, 5pm)

## Dataset

We found 4 datasets on kaggle about different aspects related to the MBTI test.

#### How the MBTI types are distributed around the world: [MBTI-TYPES Data](https://www.kaggle.com/datasets/yamaerenay/mbtitypes-full)

This dataset contains 2 files:

- *countries.csv*: compares distribution of MBTI-Types in 158 countries

- types.csv

  : contains following information:

  - Type: type (as index)
  - Description: a to-the-point description of type
  - Nickname: nickname associated with personality
  - Definition: a formal definition of type
  - Celebrities: celebrities of that type
  - E/I/T/F/S/N/J/P: abbreviation of features like "extroverted", "sensing", "judgmental" etc.
  - and other features like strengths and weaknesses, romantic relationships…

We are only interested in *countries.csv*.

#### Posts by people of different MBTI types: [(MBTI) Myers-Briggs Personality Type Dataset](https://www.kaggle.com/datasets/datasnaek/mbti-type)

This dataset contains over 8600 rows of data, on each row is a person’s:

- Type (This persons 4 letter MBTI code/type)
- A section of each of the last 50 things they have posted (Each entry separated by "|||" (3 pipe characters))

#### MBTI types of movie characters: [Movie Character MBTI Dataset](https://www.kaggle.com/datasets/subinium/movie-character-mbti-dataset)

This dataset contains over 18700 rows of data, on each row is a character’s:

- stat: number of people who voted/commented for this character, as his type is determined by the votes of users on the forum.
- mbti: 4 letter MBTI code/type
- enneagram: the enneagram type, which is another typology that divides humans into nine interrelated (non-psychological) personalities.
- role: name of the character
- movie: name of the movie in which this character was portrayed
- img_url: url of an image of the character

We mainly focus on `mbti`, `role` and `movie`.

#### MBTI types and birthdays: [MBTI and Birthdays](https://www.kaggle.com/datasets/dakotagravitt/mbti-and-birthdays)

This dataset contains about 300 rows of data, on each row is a person’s:

- timestamp: timestamp when this record was created
- birthday
- Time of Birth (not required)
- MBTI type

We are not interested in the time of birth, so we simply drop it.

## Problematic

Our inspiration comes from the Myers-Briggs Type Indicator® ([MBTI®](https://www.myersbriggs.org/my-mbti-personality-type/mbti-basics/)) personality inventory. Its purpose was to make the theory of psychological types understandable and useful in people's lives. We explored four related datasets, hoping to gain insights from different perspectives. People can take a test on [16Personalities](https://www.16personalities.com/free-personality-test), then get more inspiration from this project.

The main axis we would like to develop are the following:

- How are different personality types distributed around the world? What is the dominant type in each country?
- Do different types of person post differently? What are their main topics?
- What are the personality types of some well-known movie characters? Are there any predispositions to characters in different movies genres?
- Is there any connection between personality type and birthday?

## Exploratory Data Analysis

Please check out [Jupyter Notebook](https://github.com/com-480-data-visualization/datavis-project-2022-nomorebugs/blob/main/data/DataAnalysis.ipynb) for analysis.

## Related work

We researched on [kaggle](https://www.kaggle.com/) (since we got our datasets from here) if there were other visualization utilizing the datasets we use. However, there are no additional work including all of our dataset. Most of the work just cover one dataset and present basic visualization. Our approach is original because there are no previous work concerning all of these aspects: MBTI expression pattern, movie character MBTI, birthday-MBIT distribution, and world-wide MBIT distribution.

We also searched on internet and found that there are many commercial MBTI test websites that present data visualization using the data collected from their own website. We need to declare here that our datasets are different from those websites, as they made money on the data and therefore their datasets are not open source. We were especially inspired by a [website](https://www.16personalities.com/country-profiles/global/world) that visualizes personality data on a global map. But this visualization only concerns dichotomy, such as Extraversion(E) vs Introversion(I), not 16 personalities. Our project could extend this website by presenting visualization using multiple datasets (expression pattern, movie character MBTI, birthday-MBIT distribution), and further the world-wide MBIT visualization by allowing specific personalities proportion comparison.

It should be noted that we have never used these datasets in any of our previous works.

# Milestone 2 (Friday 6th May, 5pm)

## Link to our website: [prototype](https://com-480-data-visualization.github.io/datavis-project-2022-nomorebugs/)

## Sketches of the visualizations

## Break down of the goal

The main target of our website is to help people to acquaint with MBTI 16 personalities from different dimensions and know themselves better. First, we will present an overall introduction about MBTI. Then there will be a bunch of selection bars that users can select between different personalities. Given different personality that the user chooses, five parts on the website will change accordingly. Those parts are figure of the type, description of the type, world distribution of the type, birthday distribution of the type, and a cloud of frequently used words of people with this type.

### Selection bars
This visualization is designed to attract users to select the personality they are interested in and explore the basic characteristics of each type. There will be four groups of bar: Introversion (I) & Extraversion (E), Sensing (S) & Intuition (N),Feeling (F) & Thinking (T), Perceiving (P) & Judging (J). Users can therefore select between 16 MBTI personalities.

### Type figure
This part will change according to the chosen type. A firgure that shows the characteristic of this type of person will appear. This may help users better match people of this personality with their friend in real life.

### Type description
This part will change according to the chosen type. A description of the characteristic of this type of person will appear.

### World distribution of the type
This visualisation aims to help users to know the distribution of specific type in the world. The dataset used for this visualization is How the MBTI types are distributed around the world: [MBTI-TYPES Data](https://www.kaggle.com/datasets/yamaerenay/mbtitypes-full). Users can move their mouse to see the percentage of this kind of personality in different countries.

### Birthday distribution of the type
This part aims to give users intuition about the birthday distribution of this type. The dataset used for this visualization is MBTI types and birthdays: [MBTI and Birthdays](https://www.kaggle.com/datasets/dakotagravitt/mbti-and-birthdays).

### Cloud of frequently used worlds of people with this type
People with different personalities may have different commonly used words, and the length of posts on Twitter may also vary according to personality. We belive a word cloud is an intuitive visualization to show these differences vividly. The dataset used for this visualization is Posts by people of different MBTI types: [(MBTI) Myers-Briggs Personality Type Dataset](https://www.kaggle.com/datasets/datasnaek/mbti-type). 
