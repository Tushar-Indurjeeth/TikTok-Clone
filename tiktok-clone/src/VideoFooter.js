import React from 'react';
import './VideoFooter.css';
import MusicNoteRoundedIcon from '@material-ui/icons/MusicNoteRounded';
import Ticker from 'react-ticker';

export default function VideoFooter({ channel, description, song }) { // Using props
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>

                <div classname="videoFooter__ticker">
                    <MusicNoteRoundedIcon
                        className="videoFooter__icon" />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
                className="videoFooter__record"
                src="https://static.thenounproject.com/png/934821-200.png"
                alt=""
            />

        </div>
    )
}
