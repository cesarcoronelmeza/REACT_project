import Navbar from './components/Navbar';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = ({ storeTask }) => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="p-4">
          <AddTask storeTask={storeTask} />
          <Tasks storeTask={storeTask} />
        </div>
      </main>
    </>
  );
};

export default App;
