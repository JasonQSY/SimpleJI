/**
 * Created by JasonQSY on 5/4/16.
 */
var items = document.getElementsByTagName("td");

var register = items[3];
register.firstChild.firstChild.innerHTML = "Select JI Course";
register.firstChild.href = "http://202.120.63.11:8888/student/elect/SpecialElect/CompulsoryCourse.aspx";

var plan = items[4];
plan.firstChild.firstChild.innerHTML = "Drop JI Course";
plan.firstChild.href = "http://202.120.63.11:8888/student/elect/SpecialElect/removeCourseFastSpecial.aspx";
plan.firstChild.removeAttribute('target');

var course = items[5];
course.firstChild.removeAttribute('onmouseover');
course.firstChild.removeAttribute('onmouseout');
course.firstChild.href = "http://202.120.63.11:8888/student/elect/electResultOut.aspx";
course.firstChild.firstChild.innerHTML = "Selection Status";

var election = document.getElementById('election');
election.parentNode.removeChild(election);
