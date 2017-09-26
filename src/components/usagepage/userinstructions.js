import React, { Component } from 'react';


class UserInstructions extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="gameHeader mt-3 mb-3">
            Simple Virus War - Usage and Rules
          </h1>
          <p>
            This is a very simple game and has its roots in me just playing with JavaEE. 
            The basic idea is to have set of programs trying to beat each other by destrying the
            memory cells the other programs occupy.
            Now, of course the the memory cells are all just simulated. However, the programs are
            real. Each program is a Java class (for built-in programs) or a micro-service (for
            external programs) that implements a strategy to beat other programs.
          </p>
        </div>
        <div className="row">
          <h2>
            Basic Game Play
          </h2>
          <p>
            Playing the gane is easy. Just select the srategy for each of the four competing
            programs and hit the start button. The game starts shortly and the outcome is
            simulated on the screem. 
          </p>
          <p>
            One game is limited to 500 rounds. But it might be over earlier, if only one program 
            survives. A program stays alive as long as at least one of its memory cells is still
            intact. And as long as program is alive, it can destroy memory cells by either sniping
            at them or moving or spawning into them.
          </p>
          <p>
            Each surviving program is a winner. Play several times to see different outcomes.
          </p>
          <h2>
            Strategies and Rules for Programs
          </h2>
          <p>
            An internal umpire calls each program in each round requesting the program's next move
            and communicating to the program important information on the results of the round. The
            program can use this information to tailor their tactics. Programs also need to be aware
            of the cost of their moves.
          </p>
          <ul>
              <li>
                Sniping at memory cell. This is the basic move. A program can send a request to 
                overwrite a memory cell. If the memory cell hosts another program, this program
                might get destroyed, if this was the last memory cell occupied by the program. Of 
                course, programs can snip at their own memory cells. Not vey clever, but it is just
                software afetr all.
              </li>
              <li>
                Moving to a new memory cell. A program can chose to move from one memory cell to
                another memory cell. But there are two caveats: First of all, the internal empire will
                pause the procssing of the moving program for 2 rounds. Secondly, the program will 
                continue to occupy either the source or target cell during the move. So the program
                might get destryed during the move.
              </li>
              <li>
                Spawning into a new memory cell. A program can request t occupy an additional memory 
                cell. The umpire will pause the program for 5 rounds and like when moving, the program 
                will occupy all of its current and the new cell during the pause.
                <p>
                  Note, all programs will start the game by spawning into a memory cell of their choice.
                  In the first round, the umpire will waive pausing programs as all have to spawn anyway.
                  Although unlikely, it is possible for a program to be eliminated in the first round
                  by another program spawning into the same memory cell.
                </p>
              </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default UserInstructions;