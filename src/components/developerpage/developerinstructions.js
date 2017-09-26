import React, { Component } from 'react';
import ExternalPlayerCon from './../../containers/externalplayercon';


class DeveloperInstructions extends Component {

  handleTestExternalProgram(programURL) {
    // todo: run a test game;
    return true;
  }

  render() {

    return (
      <div className="container">

        <div className="row mt-4">
          <ExternalPlayerCon />
        </div>
        
        <hr className="mt-4"></hr>

        <div className="row">

          <h1 className="gameHeader mt-3 mb-3">
            Developer Instructions
          </h1>

          <p>
            Thank you for your interest in this little game. Whether you plan to write
            a program to compete, or actually want to help to make this initiative better
            - I do appreciate your contribution and support. The main reason for this 
            game is to be a playground for me to keep my programming skills somewhat tuned.
            But who knows, maybe this thing has a meaning beyond.
          </p>

          <section>

            <h2>Adding a Program to Compete</h2>

            <p>
              The built-in programs are Java classes. However, the server has a hook to call
              external programs via HTTP. Note, the UI only allows one external program only.
              Now, to be precise: When you add a program, you actually add a program type. It
              can be instantiated up to four times. Again, this is a UI restriction.
            </p>

            <p>
              At the top, add the fully qualified URL of the server hosting your prorgram. Then hit 
              the test button
              to check if the server can be reached. If you monitor your program, you'll see that
              the game here contacts it and runs a short simulated game checking on all API calls. 
              If the test is successful, there is a good chance that your program will be able
              to compete in a real round.
            </p>

            <p> 
              When you hit the add button, the list of programs available in the selection list 
              will be updated. Play a few rounds against combinations of the built-in programs
              and see what happens.
            </p>

            <p>
              Note: At this point in time, adding a program is temporary. When you reload the 
              page, you have to add the program again.
            </p>

          </section>

          <section>

            <h2>API for Programs</h2>

            <p>
              Let's discuss the API calls in the context of a game first. From a competing program's
              perspective the game starts with a <code> /startGame </code> call, followed by a series
              of <code> /nextMove </code> calls. Right now, it is that simple. In the future, I might add
              feedback calls providing status information to the programs.
            </p>

            <ul>
              <li>
                <code>/startGame?boardX=40&boardY=20&numPlayers=4&playerId=2 </code> is an example for 
                the <code> startGame </code> call every program has to implement. The program has to
                respond with a <code> Move </code> object. See below for details. The first move has to 
                be a <i> spawn </i> request. Otherwise the program loses instantly.
                <p>
                  The <code> playerId </code> is for future purposes.
                </p>   
              </li>
              <li>
                <code>/nextMove </code> requests the next move from your program. Your program has to 
                respond with a <code> Move </code> object.
              </li>
            </ul>

            <p>
              The <code> Move </code> object is a simple data structure for a move your program requests.
              Your program has to encode the <code> Move </code> object in JSON. The structure looks like 
              this:
            </p>

            <pre>
              {'{'}
                fromX: 10
                fromY: 10
                toX: 20
                toY: 20
                moveType: MOVE
              {'}'}
            </pre>

            <p>
              The program always has to include all data elements into the JSON. But when
              <code> fromX </code> and <code> fromY </code> are not needed, the program can
              set them to any valid integer, as their value will be ignored.
            </p>
            <p>
              Valid <code> moveType </code> elements are:
            </p>
            <ul>
              <li>
                <code>PASS </code> Your program wants to pass (do nothing) in this round. This isn't 
                a very useful move right now. You can ignore it.
              </li>
              <li>
                <code>FIRE </code> Your program wants to temporarily destroy a memory cell as given in 
                the <code> toX </code> and <code> toY </code> coordinates. If another program occupies
                this cell, it will be damaged or destroyed. Note: The program can fire at its own cells
                and effectively destroy itself.
              </li>
              <li>
                <code>MOVE </code> Your program requests a move from the coordines <code> fromX </code>
                and <code> fromY </code> to <code> toX </code> and <code> toY </code>. If the program
                moves to a cell occupied by another program, the other program will be damaged or even 
                destroyed. Moving onto itself does not impact a program - outside of the wait penalty
                associated with moving: Any program moving will be paused (not asked for moves) for the
                next 2 rounds.
              </li>
              <li>
                <code>SPAWN </code> Your program requests to occupy the memory cell
                <code> toX </code> and <code> toY </code> in addition to all cells it currently
                occupies. So the program will occupy more memory cells. If the program spawns
                into a cell already occupied by another program, the other program will be 
                damaged o even destryed.
                Spawning onto itself does not impact a program - outside of the wait penalty
                associated with spawning: Any program spawning will be paused (not asked for moves) for the
                next 5 rounds.
              </li>
            </ul>

          </section>
          <section>

            <h2>The Source Code</h2>

            <p>
              You can find the source code for this game in three repositories on GitHub.
            </p>

            <ul>
              <li>
                viruswarserver: This is the server component of the game. It implements the
                built-in programs as well as the umpire.
              </li>
              <li>
                viruswarui: The UI you are looking at.
              </li>
              <li>
                viruswarsactor: An example of an external program. 
              </li>
            </ul>

            <p>
              Feel free to close and use as you like. Also, contributions in form of fixes and
              enhancements are very welcome.
            </p>

          </section>

        </div>
      </div>
    );
  }
}

export default DeveloperInstructions;