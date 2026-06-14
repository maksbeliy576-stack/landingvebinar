(function () {
  const body = document.body;
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = body.classList.toggle('menu-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        body.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('form[data-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = form.querySelector('[data-form-status]');
      const name = form.querySelector('[name="name"]')?.value?.trim();
      if (status) {
        status.textContent = name
          ? `${name}, заявка подготовлена. Подключите вебхук Битрикс24, чтобы отправлять ее в CRM.`
          : 'Заявка подготовлена. Подключите вебхук Битрикс24, чтобы отправлять ее в CRM.';
      }
      form.reset();
    });
  });

  const modal = document.querySelector('[data-exit-modal]');
  const modalClose = document.querySelector('[data-modal-close]');
  const modalShownKey = 'dmExitModalShown';

  function openModal() {
    if (!modal || sessionStorage.getItem(modalShownKey)) return;
    modal.classList.add('is-open');
    body.classList.add('modal-open');
    sessionStorage.setItem(modalShownKey, '1');
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('is-open');
    body.classList.remove('modal-open');
  }

  if (modal) {
    document.addEventListener('mouseout', (event) => {
      if (event.clientY <= 0) openModal();
    });
    modal.addEventListener('click', (event) => {
      if (event.target === modal) closeModal();
    });
    modalClose?.addEventListener('click', closeModal);
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeModal();
    });
  }

  const calculator = document.querySelector('[data-calculator]');
  if (calculator) {
    const employees = calculator.querySelector('[name="employees"]');
    const integrations = calculator.querySelector('[name="integrations"]');
    const automation = calculator.querySelector('[name="automation"]');
    const result = calculator.querySelector('[data-calculator-result]');

    function formatPrice(value) {
      return new Intl.NumberFormat('ru-RU').format(value);
    }

    function recalc() {
      const employeeCount = Number(employees.value || 0);
      const integrationCount = Number(integrations.value || 0);
      const automationLevel = Number(automation.value || 1);
      const base = 180000;
      const total = base + employeeCount * 9000 + integrationCount * 85000 + automationLevel * 70000;
      const min = Math.round(total * .85 / 1000) * 1000;
      const max = Math.round(total * 1.25 / 1000) * 1000;
      result.textContent = `Ориентир: ${formatPrice(min)} - ${formatPrice(max)} ₽. Точную смету подготовим после аудита процессов.`;
    }

    [employees, integrations, automation].forEach((control) => {
      control.addEventListener('input', recalc);
      control.addEventListener('change', recalc);
    });
    recalc();
  }

  const quiz = document.querySelector('[data-quiz]');
  if (quiz) {
    const result = quiz.querySelector('[data-quiz-result]');
    quiz.addEventListener('change', () => {
      const answers = [...quiz.querySelectorAll('input:checked')].map((input) => input.value);
      if (!answers.length) return;
      const score = answers.reduce((sum, value) => sum + Number(value), 0);
      if (score <= 4) {
        result.textContent = 'Подойдет экспресс-аудит и базовая настройка воронок. Начните с диагностики отдела продаж.';
      } else if (score <= 8) {
        result.textContent = 'Рекомендуем проект внедрения Битрикс24 с автоматизациями, регламентами и обучением команды.';
      } else {
        result.textContent = 'Нужна комплексная система продаж: интеграции с 1С/сайтом, сквозная аналитика и регулярное сопровождение.';
      }
    });
  }
}());
