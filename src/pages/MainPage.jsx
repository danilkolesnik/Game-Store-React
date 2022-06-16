import Header from '../Components/Header/Header'
import RevContent from '../Components/Collections/RevContent';
import Collection from '../Components/Filters/Collection';

function MainPage() {
  const item_list = ['All', 'Shooter', 'Arcade', 'Racing', 'RPG', 'Adventure', 'Sandbox']
  const sort_label = ['Price Up', "Price Down", 'Name', 'Relevance']
  return (
    <div className="App">
      <Header />
      <RevContent />
      <Collection list={item_list} label={sort_label} />
    </div>
  )
}

export default MainPage;