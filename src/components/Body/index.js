import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar ? (
            <div className="left-navbar">
              <h1 className="body-header-text">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="item">Item 1</li>
                <li className="item">Item 2</li>
                <li className="item">Item 3</li>
                <li className="item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content">
              <h1 className="body-header-text">Content</h1>
              <p className="content-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="right-navbar">
              <h1 className="body-header-text">Right Navbar</h1>
              <div className="ad-box-container">
                <p className="ad-box">Ad 1</p>
                <p className="ad-box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

/* Write your code here
import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      const showLeftBar = () => (
        <div className="left-container">
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      )

      const showContentCen = () => (
        <div className="content-container">
          <h1>Content</h1>
          <p>
            Lorem ipsum This has been a top class innings. He has looked very good
            with the bat in the series and deservingly gets a fifty. After all
            those injuries in recent past, Washington finally gets a proper go
            in the XI and he is delivering. Can he add a few more runs here?
          </p>
        </div>
      )

      const showRightBar = () => (
        <div className="right-container">
          <h1>Right Navbar</h1>
          <div className="ad ad1">Ad 1</div>
          <div className="ad2 ad">Ad 2</div>
        </div>
      )

      return (
        <div className="body-container">
          {showLeftNavbar && showLeftBar()}
          {showContent && showContentCen()}
          {showRightNavbar && showRightBar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
*/
