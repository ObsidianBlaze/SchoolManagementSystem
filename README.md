# SchoolManagementSystem
A System that helps bridge the physical gap between students and tutors. Inspired by the pandemic COVID19

#When trying to run the database, Execute it in a batch.

#DATABASE

#**********INITIAL TABLES********

#course
#test
#student
#teacher
#admin
#result

#***********COLUMNS**********

			#Test
#test_id
#student_id Foreign Key
#score
#date_of_creation		

			#Result
#result_id
#student_id Foreign Key
#score
#date_of_creation 

			#Course
#course_id
#course_name
#course_code
#course_status (To know if the courses are still ongoing or completed.)

			#Student
#student_id
#firstname
#lastname
#address
#photo
#username
#password
#email
#course_id foreign key (Can be null)
#result_id foreign key (Can be null)
#test_id foreign key (Can be null)
#date_of_creation

			#Teacher
#teacher_id
#firstname
#lastname
#address
#photo
#email
#password
#course_id foreign key (Can be null)
#date_of_creation

			#Admin



			#Relationship
#Test table has the student id so as to link the student with the test that was taken for a particular course.
#Result table has the student id so as to link the student with the result that was taken for a particular course.
#Course has a status column to keep track of the course being taught by a teacher.
#Course ID in the student's table is to link a student to a particular course being taken.
#Result/Test ID are foreign keys in the students table to keep track of the students result and test scores.
#The teacher has the course_id foreign key in order to select the course the teacher is taking.
#The teacher can also change the status of the course due to the foreign key.