export default function getTime() {
  const time = new Date();
  const meridian = time.getHours() >= 12 ? 'PM' : 'AM';
  const hours = time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
  const minutes = time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
  const seconds = time.getSeconds() < 10 ? `0${time.getSeconds()}` : time.getSeconds();
  return `${hours === 0 ? 12 : hours}:${minutes}:${seconds} ${meridian}`;
};
