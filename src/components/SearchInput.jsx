
export default function SearchInput ({ handleSearch }) {
    return (
<div className='searchCard'>
      <input type="text"  onChange={e => handleSearch(e.target.value)} placeholder="Search products"/>
    </div>
  )
}