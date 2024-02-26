//for toggling the tabs in about section

var tablinks = document.getElementsByClassName('tab-links')
	var tabcontent = document.getElementsByClassName('tab-content')

	function opentab(tabname) {
		for(tablink of tablinks) {
			tablink.classList.remove("active-link")
		}

		for(tabcon of tabcontent) {
			tabcon.classList.remove("active-tab")
		}

		event.currentTarget.classList.add("active-link")
		document.getElementById(tabname).classList.add("active-tab")
	}