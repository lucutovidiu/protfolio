import React from "react";
import NavbarMeniu from "./NavbarMeniu";

export default class NavBar extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			openMenu: false
		};
	}

	toggleMenu(e) {
		// console.log(e);
		e === "menu_btn"
			? this.setState({openMenu: true})
			: this.setState({openMenu: !this.state.openMenu});
	}

	render() {
		const {openMenu} = this.state;
		// console.log("updated");
		return (
			<nav className="navBar_wrapper">
				<ul className="navBar_mobile_menu ">
					<li
						id="navBar_mobile_menu-btn"
						className={openMenu ? "m-fadeOut" : ""}
					>
            <span onClick={() => this.toggleMenu("menu_btn")}>
              MENU <i className="hand fas fa-hand-point-left"/>
            </span>
					</li>
					<ul
						className={
							openMenu
								? "navBar_mobile_hidden_menu"
								: "navBar_mobile_hidden_menu m-fadeOut"
						}
					>
						<NavbarMeniu tab={this.props.tab}/>
						<li
							style={{cursor: "pointer"}}
							onClick={() => {
								this.toggleMenu("");
							}}
						>
							<i className="fas fa-long-arrow-alt-left"/> Back
						</li>
					</ul>
				</ul>
				<ul className="navBar_desktop_menu">
					<li className="navBar_desktop_logo">Ovidiu Lucut</li>
					<span className="navBar_items_list">
            <NavbarMeniu tab={this.props.tab}/>
          </span>
				</ul>
				<div/>
			</nav>
		);
	}
}
