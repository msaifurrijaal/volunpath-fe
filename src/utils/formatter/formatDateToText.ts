export function formatDateToIndonesian(dateString: string) {
  const date = new Date(dateString);

  const days = date.getDate();

  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const month = date.getMonth();
  const year = date.getFullYear();

  return `${days} ${months[month]} ${year}`;
}
