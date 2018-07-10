import React, {Component} from 'react';

import Icon from '../icon';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
            <label className="library-course__title">Problem Solving</label>
            { Icon('fas fa-check')}
            {/*arrow component*/}
            {/*action button component*/}
            <div className="library-course-discription"></div>
                <label>Course Description</label>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate, mi sit amet ornare vestibulum, ipsum est efficitur ipsum, bibendum sollicitudin est erat eget odio. Mauris eleifend, erat vitae molestie commodo, lacus ex volutpat erat, a efficitur tellus dui in justo. Fusce rutrum felis vel efficitur consequat. Etiam sodales fermentum nunc, ut posuere leo euismod eu. Integer semper libero sem, vitae dictum felis ultricies nec. Morbi justo dui, posuere a egestas quis, iaculis a lacus. Vestibulum sed leo aliquet, luctus dui et, fermentum dolor. Integer rutrum facilisis arcu ac imperdiet. Aliquam dapibus eget justo eu interdum. Sed non elit ac lorem luctus porttitor eget et libero. Nullam cursus elementum mattis. Morbi a feugiat est. Vestibulum nec eros diam. Praesent ut porta nulla. Cras viverra risus consectetur, condimentum velit ut, gravida tortor.
Sed mattis, arcu quis tristique pharetra, libero neque interdum purus, eget semper augue risus sit amet tortor. Sed tellus leo, interdum vehicula ligula sit amet, consectetur lobortis eros. Nulla ac ullamcorper ligula, vel fermentum enim. Ut et nibh a justo vehicula dictum a et tellus. Etiam mauris magna, consectetur non mauris a, venenatis tempor odio. Vestibulum et facilisis mauris. Proin convallis auctor orci at bibendum. Sed a purus nulla. Vestibulum aliquet risus et velit ultrices vestibulum ac et est. Pellentesque viverra hendrerit urna, feugiat ultrices nulla. Aliquam quis ante ex. Aliquam eleifend nulla at sagittis congue. Duis placerat consectetur felis, et mollis justo mattis at.

</p>

            </div>
        )
    }
}

export default LibraryCourse;