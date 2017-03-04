import React from 'react';
import noteeditor from './noteeditor.jsx';
import notesgrid from './notesgrid.jsx';
const app = React.createClass({
    render() {
        return (
          <div className='App'>
                <h2 className='App__header'>NotesApp</h2>
                <NoteEditor/>
                <NotesGrid/>
            </div>
      );
    }
});

export default app;
