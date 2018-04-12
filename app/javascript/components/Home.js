import React from "react"
import PropTypes from "prop-types"
import Grid from "./homeGrid/CalendarGrid"
import Journal from "./Journal"

class Home extends React.Component {

  getXandY = () => {
    $(document).on('click', '.day', (e) => {
      let target = $(e.currentTarget),
        x = target.parents('.week').attr('data-id'),
        y = target.attr('data-id');
      console.log(`x:${x} and y:${y}`);
    });
  }

  render () {
    return (
      //This will be where we add the Grid for the flowers
      <React.Fragment>
        <h1>This is the homepage</h1>
        <Grid onClick={this.getXandY()}/>

        <Journal/>

         {/* Simulation to test Watson API */}
        <h3>this is the index page in the home controller</h3>
        <form method="post" action="/watson">
        <input type="submit" text="submit" value="submit" />
        </form>
      </React.Fragment>
    );
  }
}

export default Home
