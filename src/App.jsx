
import Router from './routes/router';
import { Suspense } from 'react';

function App() {
 

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Router />
      </Suspense>
    </div>
  )
}

export default App
