import './AboutProject.css';

function AboutProject() {
  return (
    <section className='project' aria-label='О проекте' id='aboutProject'>
      <h2 className='project__title'>О проекте</h2>
      <div className='project__description'>
        <div className='project__block'>
          <h3 className='project__title'>Дипломный проект включал 5 этапов</h3>
          <p className='project__subtitle'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='project__block'>
          <h3 className='project__title'>На выполнение диплома ушло 5 недель</h3>
          <p className='project__subtitle'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='project__duration'>
        <p className='project__time-frontend'>1 неделя</p>
        <p className='project__time-backend'>4 недели</p>
        <p className='project__time-week'>Back-end</p>
        <p className='project__time-week'>Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
