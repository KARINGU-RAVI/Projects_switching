import './index.css'

const TabItem = props => {
  const {tabDetails, status, changeProject} = props
  const {displayText, tabId} = tabDetails
  const change = () => {
    changeProject(tabId)
  }
  const istrue = status ? 'active-tab-btn' : ''
  console.log(status)
  return (
    <li className="tab-item-container ">
      <button onClick={change} type="button" className={`tab-btn ${istrue}`}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
