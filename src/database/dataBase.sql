create table tblUser (
IdUser int identity(1, 1) primary key,
UserName varchar(100) not null, 
UserCpf varchar(11) unique not null, 
UserType varchar(10) -- teacher | student
)

create table tblActivities(
IdActivitie int identity(1, 1) primary key,
IdUser int not null,
IdClass int not null,
ActivitieType varchar(10) not null, --prova | trabalho | atividade
ActivitieDescription varchar(1500),
ActivitieDataEnd datetime,
ActivitieDataCreate datetime,
constraint fk_user foreign key (IdUser) references tblUser(IdUser),
constraint fk_class foreign key (IdClass) references tblClass(IdClass)

)

create table tblClass(
IdClass int identity(1, 1) primary key,
ClassPeriod int not null,
ClassCurso varchar(50) not null
)

alter table tblActivities
add CreatedAt datetime default getdate() not null 