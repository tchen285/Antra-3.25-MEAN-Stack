const Api = (() => {
    const url = 'http://localhost:4232/courseList';
    const course_data = fetch(url).then((res) => res.json());
    return { course_data };
})();

const View = (() => {
    const domStr = {
        available_courses: '.available-courses',
        selected_courses: '.selected-courses'
    }

    const creatTemp = (arr) => {
        let temp = `<h4>Available Courses</h4>`
        let isRequired = ''
        arr.forEach((course) => {
            if (course.required === true) {
                isRequired = 'Compulsory'
            } else {
                isRequired = 'Elective'
            }
            temp += `<li class="dynamic-list-item" data-credit="${course.credit}">${course.courseName}<br>Course Type: ${isRequired}<br>Course Credit: ${course.credit}</li>`;

        })

        return temp
    }

    const render = (element, temp) => {
        element.innerHTML = temp
    }

    return {
        domStr,
        creatTemp,
        render
    }
})();

const Model = ((view, api) => {
    const { domStr, creatTemp, render } = view
    const { course_data } = api

    class State {
        constructor() {
            this._courseList = []
        }

        getCourseList() {
            return this._courseList
        }

        setCourseList(arr) {
            this._courseList = arr
            const DOM_element = document.querySelector(domStr.available_courses)
            const temp = creatTemp(this._courseList)
            render(DOM_element, temp)
        }
    }

    return {
        course_data,
        State
    }
})(View, Api)

const Controller = ((view, model) => {
    const { domStr, creatTemp, render } = view
    const { course_data, State } = model

    const newState = new State()
    const init = () => {
        course_data.then(data => newState.setCourseList(data));
    }

    const updateTotalCredit = () => {
        const totalCreditElement = document.querySelector('h2');
        const selectedCourses = document.querySelectorAll('.dynamic-list-item.selected');


        let totalCredit = 0;
        selectedCourses.forEach(course => {
            totalCredit += parseInt(course.dataset.credit);
        });


        totalCreditElement.textContent = `Total Credit: ${totalCredit}`;

        if (totalCredit > 18) {
            alert("You cannot choose more than 18 credits in one semester!");
        }

        return totalCredit;
    }

    const toggleCourseSelection = () => {
        document.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('dynamic-list-item')) {
                target.classList.toggle('selected');
                updateTotalCredit();

                if (target.classList.contains('selected')) {
                    target.style.backgroundColor = 'cornflowerblue';
                } else {
                    target.style.backgroundColor = '';
                }
            }
        });
    }


    document.addEventListener('DOMContentLoaded', () => {
        toggleCourseSelection();
    });

    const addCourse = () => {
        const selectButton = document.getElementById('selectButton');

        selectButton.addEventListener('click', () => {
            const totalCredit = updateTotalCredit();

            if (totalCredit > 18) {
                alert("You cannot choose more than 18 credits in one semester!");
            } else {
                const confirmation = confirm(`You have chosen ${totalCredit} credits for this semester. You cannot unselect once you submit. Do you want to confirm?`);
                if (confirmation) {
                    showSelectedCourses();
                    selectButton.disabled = true;
                }
            }
        });
    }

    const showSelectedCourses = () => {
        const selectedCourses = document.querySelectorAll('.dynamic-list-item.selected');
        const selectedCoursesList = document.querySelector(domStr.selected_courses + ' ul');


        selectedCoursesList.innerHTML = '';

        selectedCourses.forEach(course => {
            const newCourseItem = document.createElement('li');
            newCourseItem.innerHTML = course.innerHTML;
            selectedCoursesList.appendChild(newCourseItem);
        });
    }

    const bootstrap = () => {
        init()
        addCourse()
    }

    return {
        bootstrap
    }

})(View, Model)

Controller.bootstrap()