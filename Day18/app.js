document.addEventListener("DOMContentLoaded", () => {
	const tabs = document.querySelectorAll('.scroll-tab-container a');
	const rightArrow = document.querySelector('.scroll-tab-container .right-arrow svg');
	const leftArrow = document.querySelector('.scroll-tab-container .left-arrow svg');
	const tabList = document.querySelector('.scroll-tab-container ul');

	// Safety check
	if (!tabList) return;

	const rightArrowContainer = document.querySelector('.scroll-tab-container .right-arrow');
	const leftArrowContainer = document.querySelector('.scroll-tab-container .left-arrow');

	const removeAllActiveTab = () => {
		tabs.forEach((tab) => tab.classList.remove('active'));
	};

	tabs.forEach((tab) => {
		tab.addEventListener('click', () => {
			removeAllActiveTab();
			tab.classList.add('active');
		});
	});

	const manageIcons = () => {
		if (tabList.scrollLeft >= 20) {
			leftArrowContainer.classList.add('active');
		} else {
			leftArrowContainer.classList.remove('active');
		}

		let maxScrollValue = tabList.scrollWidth - tabList.clientWidth - 20;

		if (tabList.scrollLeft >= maxScrollValue) {
			rightArrowContainer.classList.remove('active');
		} else {
			rightArrowContainer.classList.add('active');
		}
	};

	rightArrow.addEventListener('click', () => {
		tabList.scrollLeft += 200;
		manageIcons();
	});

	leftArrow.addEventListener('click', () => {
		tabList.scrollLeft -= 200;
		manageIcons();
	});

	tabList.addEventListener('scroll', manageIcons);

	tabList.addEventListener('wheel', (event) => {
		tabList.scrollLeft += event.deltaY;
		event.preventDefault();
		manageIcons();
	});

	let dragging = false;
	const drag = (e) => {
		if (!dragging) return;
		tabList.classList.add('dragging');
		tabList.scrollLeft -= e.movementX;
	};

	tabList.addEventListener('mousedown', () => {
		dragging = true;
	});
	tabList.addEventListener('mousemove', drag);
	tabList.addEventListener('mouseup', () => {
		dragging = false;
		tabList.classList.remove('dragging');
	});

	const tabBody = document.querySelector('.tab-body');
	const allTabs = document.querySelectorAll('.scroll-tab-container > ul > li');

	allTabs.forEach((li, i) => {
		li.addEventListener('click', () => {
			showData(i);
		});
	});

	const showData = (segment = 0) => {
		let tabData = '';
		imageSegments[segment].forEach((src) => {
			tabData += `<div><img src="${src}" /></div>`;
		});
		tabBody.innerHTML = tabData;
	};

	showData();
});
