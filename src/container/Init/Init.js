import React from 'react';
import Spinner from '../../component/Spinner/Spinner';
export default (props) => {

  let btn = props.spinner ? <Spinner /> : 
            <button
              onClick={()=>props.click('play')}>Start Quiz</button>


  return (
    <div className="init">
      <h1><i><u>Quiz App</u></i></h1>
      <label for="trivia_category">Select category :</label>
      <select name="trivia_category" onChange={(e)=>props.onGenreChange(e)}>
			<option value="any">Any Category</option>
			<option value="9">General Knowledge</option>
      <option value="10">Entertainment: Books</option>
      <option value="11">Entertainment: Film</option>
      <option value="12">Entertainment: Music</option>
      <option value="13">Entertainment: Musicals &amp; Theatres</option>
      <option value="14">Entertainment: Television</option>
      <option value="15">Entertainment: Video Games</option>
      <option value="16">Entertainment: Board Games</option>
      <option value="17">Science &amp; Nature</option>
      <option value="18">Science: Computers</option>
      <option value="19">Science: Mathematics</option>
      <option value="20">Mythology</option>
      <option value="21">Sports</option>
      <option value="22">Geography</option>
      <option value="23">History</option>
      <option value="24">Politics</option>
      <option value="25">Art</option>
      <option value="26">Celebrities</option>
      <option value="27">Animals</option>
      <option value="28">Vehicles</option>
      <option value="29">Entertainment: Comics</option>
      <option value="30">Science: Gadgets</option>
      <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
      <option value="32">Entertainment: Cartoon &amp; Animations</option>	
    	</select>
      <br></br>
      <label for="dif">Select difficulty level :</label>
      <select name="level" id="dif" onChange={(e)=>props.onLevelChange(e)}>
      <option value="easy">easy</option>
      <option value="medium">medium</option>
      <option value="hard">hard</option>
      </select>
      

      <p>This app tests how smart you are and how good you are in general information and current events. You are given 15 seconds to answer each question of 10. Each question is in multiple choice. You have to get at least 6 correct answers to proceed to the next level.</p>
      {btn}
    </div>
  )
}
