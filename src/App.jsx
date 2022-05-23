import { useState } from "react";
import "./App.css";
import "./images/Logo.svg";
import Form_generator from "./components/Form_Generator";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <div className="app__logo">
          <span>
            <svg
              width="179"
              height="27"
              viewBox="0 0 179 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.7047 0.300134C14.5229 -0.165019 18.3761 -0.00129005 22.205 0.203806C22.711 0.188474 23.2159 0.0892529 23.7222 0.14624C24.1559 0.198599 24.5444 0.430597 24.8919 0.690365C25.592 1.2235 26.1794 1.9004 26.6784 2.63226C27.2689 3.5105 27.3973 4.62421 27.9925 5.501C28.7782 6.62888 30.0312 7.30578 30.7779 8.46751C31.2823 9.22136 31.3675 10.1878 31.2722 11.075C31.1894 11.872 30.7844 12.5931 30.2618 13.1714C29.5636 13.9357 28.7622 14.623 28.2411 15.5382C27.8977 16.1405 27.7656 16.8408 27.429 17.4451C26.6276 18.6812 25.4577 19.6046 24.2364 20.3665C22.4698 21.4611 20.5475 22.2439 18.7026 23.18C17.8362 23.6125 17.0037 24.1175 16.1162 24.5049C15.2968 24.8723 14.4 24.9677 13.5291 25.1306C12.7715 25.2498 12.0318 25.4615 11.2842 25.6319C9.45089 26.0415 7.56312 26.3597 5.68405 26.154C4.39992 26.0117 3.09447 25.5341 2.19266 24.5462C1.84231 24.139 1.51553 23.6865 1.33236 23.1725C1.22605 21.6116 1.43222 20.0541 1.62969 18.5102C1.81651 17.024 1.92899 15.4983 1.61735 14.021C1.31525 12.8509 0.598573 11.8555 0.23813 10.7076C-0.0443346 9.83896 -0.107447 8.86005 0.224385 7.99657C0.761544 6.97919 1.82941 6.38676 2.32113 5.33582C2.60135 4.77666 2.65661 4.1362 2.63725 3.51715C3.51606 2.61057 4.61618 1.96346 5.76652 1.49686C7.34714 0.855541 9.02509 0.515643 10.7047 0.300134Z"
                fill="#0D0D0D"
              />
              <path
                d="M8.88149 1.70372C12.7581 1.14706 16.6857 0.907969 20.6008 1.04742C21.5241 1.1067 22.4535 1.04883 23.3737 1.16089C24.1524 1.26421 24.8551 1.70372 25.3599 2.28832C26.5572 3.66557 26.9275 5.55375 28.1502 6.91378C27.6249 6.96883 27.1004 6.82148 26.5774 6.89148C26.4205 6.90532 26.2818 6.98407 26.156 7.07214C26.9515 6.97306 27.7835 7.00214 28.5286 7.32281C29.5475 7.73635 30.381 8.6055 30.6908 9.65699C30.9297 10.4765 30.8004 11.3826 30.373 12.1196C29.8719 12.9885 29.0524 13.6473 28.1422 14.0623C28.1844 14.0818 28.2275 14.1004 28.2706 14.1201C28.4358 14.0586 28.5828 13.9618 28.7294 13.8672C28.75 13.909 28.7908 13.9937 28.8113 14.0355C28.5768 14.1873 28.3205 14.3194 28.1473 14.545C27.7382 15.0384 27.6103 15.6803 27.3789 16.2604C27.1318 16.9339 26.6587 17.494 26.156 17.997C24.945 19.156 23.4533 19.9662 21.9618 20.7142C20.8953 21.23 19.8113 21.7098 18.7398 22.2157C17.8011 22.6487 16.926 23.2014 15.9843 23.6279C15.7755 23.7132 15.5675 23.8157 15.3401 23.8388C15.0188 23.8416 14.7009 23.7499 14.3788 23.7869C13.8149 23.8461 13.2905 24.0728 12.7595 24.2535C11.6595 24.6656 10.4956 24.8694 9.3366 25.0354C8.03205 25.2067 6.70552 25.2841 5.3964 25.1178C4.32697 24.9747 3.20873 24.669 2.42264 23.8944C2.00405 23.4529 1.65651 22.8697 1.71272 22.2431C1.69874 19.7262 2.37955 17.2439 2.17068 14.7228C2.08309 13.9525 1.95668 13.1562 1.54409 12.4826C1.21881 11.9161 0.754279 11.4108 0.597344 10.7641C0.446116 9.99517 0.433562 9.1599 0.788804 8.44149C1.23421 7.5094 2.25172 6.99988 2.67316 6.0517C2.90114 5.55968 2.92026 5.00839 2.88802 4.4777C3.99255 3.20179 5.53679 2.27082 7.2137 1.96455C8.35847 1.74493 9.51693 1.98403 10.6651 2.03963C12.9726 2.18783 15.2219 1.40366 17.5286 1.51346C18.59 1.5829 19.6264 1.88579 20.5862 2.33377C21.6454 2.82579 22.601 3.50157 23.5885 4.11581C23.9047 4.30212 24.2151 4.50593 24.5601 4.63973C23.5226 3.82958 22.4569 3.0375 21.2919 2.41338C20.0684 1.76356 18.701 1.36385 17.3094 1.32208C15.0034 1.24981 12.7464 1.91091 10.4403 1.87055C9.91783 1.85389 9.39053 1.8251 8.88149 1.70372Z"
                fill="#FCFCFC"
              />
              <path
                d="M14.596 2.13979C16.4485 1.89895 18.3776 1.99362 20.1487 2.58743C21.2308 2.9487 22.2421 3.50415 23.0848 4.23689C23.358 4.48954 23.647 4.73522 23.8526 5.04204C22.4021 3.82332 20.6751 2.84786 18.7569 2.44743C17.5943 2.19344 16.3877 2.14677 15.2001 2.24761C14.2737 2.34041 13.3943 2.68371 12.4585 2.7167C10.741 2.82291 9.02266 2.6467 7.31895 2.45172C7.1515 2.43643 6.98492 2.40639 6.8169 2.41256C6.52186 2.55122 6.29706 2.80441 5.96332 2.87307C6.18496 2.52494 6.58264 2.29723 7.00986 2.24976C7.86143 2.15642 8.6872 2.4249 9.52529 2.50992C11.2261 2.65126 12.9187 2.3734 14.596 2.13979Z"
                fill="#0D0D0D"
              />
              <path
                d="M15.9045 3.10192C17.5285 2.91468 19.2254 3.04581 20.7371 3.76715C21.4381 4.11912 22.1621 4.67662 22.3617 5.54619C21.8557 4.553 20.8924 3.98169 19.9339 3.66573C18.4695 3.19103 16.9194 3.12442 15.4047 3.20724C15.5657 3.14572 15.7348 3.11572 15.9045 3.10192Z"
                fill="#0D0D0D"
              />
              <path
                d="M7.23467 3.83901C8.36139 3.46278 9.58744 3.44578 10.7414 3.69958C10.9533 3.74683 11.1889 3.74827 11.3726 3.87963C11.4959 3.94733 11.3842 4.08388 11.3588 4.17462C10.3303 3.75633 9.19264 3.61258 8.09856 3.78946C7.43784 3.91132 6.7608 4.1945 6.34377 4.75625C6.16283 4.99017 6.07644 5.27624 5.96332 5.54617C5.98499 5.1273 6.13694 4.7335 6.31985 4.36389C6.56044 4.09627 6.90628 3.95914 7.23467 3.83901Z"
                fill="#0D0D0D"
              />
              <path
                d="M15.5458 3.5867C15.6591 3.46199 15.7874 3.57111 15.9015 3.62901C15.5255 3.86826 15.2442 4.26817 15.099 4.72598C15.0782 4.99895 15.1148 5.27988 15.0393 5.54617C14.871 5.20479 14.9015 4.79693 14.9302 4.42311C15.1689 4.17559 15.2975 3.82213 15.5458 3.5867Z"
                fill="#0D0D0D"
              />
              <path
                d="M10.4355 4.61206C10.5068 4.5856 10.5783 4.56145 10.6507 4.53787C10.7255 4.73886 10.8134 4.93238 10.933 5.09513C10.9279 5.58164 10.9381 6.06816 10.9279 6.55468C10.6275 6.20446 10.9115 5.64922 10.8055 5.21589C10.6906 5.00513 10.5232 4.84842 10.4355 4.61206Z"
                fill="#0D0D0D"
              />
              <path
                d="M17.2987 5.18243C18.4833 4.94862 19.7559 4.97446 20.8733 5.50914C21.5859 5.84478 22.2002 6.50775 22.3614 7.35624C22.1706 7.5199 21.9518 7.66634 21.7016 7.6728C21.1291 7.7011 20.5995 7.39869 20.0334 7.35685C18.4652 7.21903 16.9159 7.7571 15.5543 8.57143C15.2073 8.18626 14.6204 8.04997 14.4484 7.49714C14.316 7.15135 14.5597 6.83724 14.7432 6.58036C15.3922 5.77772 16.3608 5.39439 17.2987 5.18243Z"
                fill="#0D0D0D"
              />
              <path
                d="M15.9126 6.70453C16.4641 6.38421 17.0993 6.23557 17.7094 6.05038C17.6322 6.36044 17.8434 6.6232 17.8893 6.91849C17.4697 6.87294 17.0525 6.9808 16.6939 7.1845C16.3076 7.39195 15.8748 7.68399 15.41 7.50982C15.3648 7.16123 15.6151 6.87169 15.9126 6.70453Z"
                fill="#FCFCFC"
              />
              <path
                d="M7.13344 6.1574C8.01701 5.93161 8.95293 6.08815 9.80047 6.39366C10.3719 6.61916 10.9686 6.91187 11.3101 7.46237C11.6675 7.3553 12.0717 7.19439 12.4233 7.41174C12.4163 7.55693 12.4213 7.72918 12.3037 7.83189C12.0233 8.11937 11.5549 8.08067 11.3036 8.41353C11.3027 8.93494 11.3058 9.45634 11.3013 9.97775C10.8648 10.48 10.0403 10.5783 9.83369 11.2897C10.183 11.9153 10.6148 12.5886 11.3123 12.8269C11.5932 12.8493 11.7742 12.5819 12.0118 12.4739C12.0985 12.5269 12.1849 12.5813 12.2708 12.6363C12.1345 12.9843 11.9673 13.3588 11.6385 13.5525C11.4232 13.6747 11.1688 13.595 10.9737 13.4705C10.2925 13.0297 9.89702 12.2563 9.22315 11.8065C9.08776 11.9592 8.93576 12.1678 8.7117 12.1463C8.59855 11.9927 8.55379 11.8006 8.47244 11.6293C7.83967 11.7916 7.32372 12.4411 6.62902 12.3235C8.16112 11.6904 9.3608 10.491 10.6551 9.47438C10.6551 9.07431 10.6551 8.67365 10.6551 8.27299C10.0476 7.89736 9.32561 7.82375 8.63514 7.75362C7.73806 7.65993 6.80635 7.65761 5.96332 7.28605C6.08661 6.70208 6.58877 6.2892 7.13344 6.1574Z"
                fill="#0D0D0D"
              />
              <path
                d="M20.871 6.57431C21.0282 6.52491 21.2033 6.56176 21.3233 6.76762C21.3764 6.83463 21.3681 6.95772 21.3681 7.05891C21.2546 6.88109 21.1069 6.88803 20.9667 6.85225C20.8885 6.83864 20.887 6.67871 20.871 6.57431Z"
                fill="#FCFCFC"
              />
              <path
                d="M6.95679 6.66534C7.30672 6.70824 7.65335 6.55838 8.00328 6.55536C8.17164 6.54327 8.3279 6.70401 8.44757 6.95782C8.15541 6.93908 7.86463 6.98562 7.57384 7.04605C7.35679 7.08291 7.10754 7.06417 6.95679 6.66534Z"
                fill="#FCFCFC"
              />
              <path
                d="M22.8586 6.56548C23.3718 6.4737 23.8314 7.00408 24.3493 6.83616C24.2635 7.59959 23.5238 7.77046 23.1705 7.30733C23.4059 7.25319 23.7218 7.41349 23.8701 7.05272C23.515 7.01169 23.129 6.95417 22.8586 6.56548Z"
                fill="#0D0D0D"
              />
              <path
                d="M3.23707 7.18763C3.72021 7.27031 4.20175 7.1553 4.67794 7.07633C4.95906 7.02197 5.2669 7.09092 5.46652 7.3201C4.60739 7.19936 3.71059 7.21452 2.89449 7.55814C2.21174 7.82909 1.59044 8.377 1.33604 9.12348C1.10356 9.78125 1.1725 10.5151 1.37158 11.1721C1.41808 11.3097 1.45042 11.4716 1.56933 11.5612C1.97845 11.8922 2.53855 11.8942 2.94633 12.2232C3.06952 12.3102 3.03665 12.4699 3.03184 12.6049C2.84505 12.4759 2.66949 12.3251 2.46132 12.237C2.06877 12.0539 1.61583 11.966 1.30264 11.6307C1.00095 10.9194 0.90715 10.0925 1.08085 9.32919C1.3005 8.33895 2.03109 7.52438 2.91293 7.17132C3.01822 7.12983 3.12965 7.18162 3.23707 7.18763Z"
                fill="#0D0D0D"
              />
              <path
                d="M25.8402 7.14468C26.2175 7.02723 26.6211 7.06852 27.0119 7.05887C27.7429 7.05324 28.5221 7.21735 29.0739 7.71023C29.5711 8.16691 29.7639 8.84374 29.8035 9.48759C29.839 9.85497 29.7866 10.2215 29.7758 10.5881C29.7348 10.5433 29.6936 10.4988 29.6526 10.4548C29.7113 9.88447 29.6958 9.30766 29.6357 8.73862C29.3952 8.17173 28.9526 7.65392 28.3498 7.42947C27.5515 7.12001 26.6757 7.23452 25.8402 7.14468Z"
                fill="#0D0D0D"
              />
              <path
                d="M22.8586 7.62763C23.0526 7.42757 23.2664 7.72572 23.3561 8.0666C23.1627 8.0802 22.9919 7.88645 22.8586 7.62763Z"
                fill="#0D0D0D"
              />
              <path
                d="M24.8413 7.64467C25.792 7.44344 26.8358 7.60868 27.6354 8.20369C28.3606 8.73182 28.866 9.62853 28.8189 10.5684C28.8049 11.3698 28.3704 12.0991 27.7963 12.6051C27.5694 12.0853 27.8697 11.5701 28.0354 11.0888C28.2491 10.5414 28.1309 9.91734 27.8763 9.409C27.6251 8.89527 27.145 8.53059 26.6179 8.38093C26.1487 8.22888 25.6517 8.24898 25.1679 8.27957C24.6761 8.77801 24.0191 9.04282 23.3684 9.22636C22.5146 9.45129 21.6176 9.52027 20.7461 9.38201C20.1596 9.27615 19.5393 9.05572 19.1639 8.54378C18.9606 8.27897 18.8952 7.93498 18.8834 7.60329C19.6448 7.71995 20.0882 8.4916 20.8026 8.72732C21.4524 8.94235 22.1725 8.86858 22.7994 8.60376C23.492 8.31196 24.0959 7.79672 24.8413 7.64467Z"
                fill="#0D0D0D"
              />
              <path
                d="M2.11175 8.73501C2.50314 8.40282 2.99957 8.23495 3.47835 8.06708C3.23238 8.58074 2.47352 8.51187 2.27034 9.06041C2.10726 9.55308 2.30655 10.093 2.12551 10.5881C2.07973 10.5222 2.03454 10.4572 1.98756 10.3921C1.99624 9.83739 2.08422 9.28827 2.11175 8.73501Z"
                fill="#0D0D0D"
              />
              <path
                d="M3.14159 8.72885C3.77221 8.46495 4.5023 8.57709 5.14654 8.74335C5.73453 8.90521 6.30919 9.14062 6.76454 9.51121C7.02241 9.38923 7.23972 9.20536 7.51358 9.10799C7.67346 9.06551 7.82208 9.12922 7.95087 9.20536C7.93399 9.48195 7.81971 9.77951 7.51565 9.909C6.9102 10.1641 6.21593 10.0569 5.56725 10.0833C5.54445 9.74455 5.3526 9.37059 4.94492 9.28046C4.11416 9.09866 3.30709 9.45864 2.48462 9.50785C2.57314 9.1849 2.78335 8.86999 3.14159 8.72885Z"
                fill="#0D0D0D"
              />
              <path
                d="M24.9783 9.20534C25.0695 9.08329 25.2334 9.09459 25.3686 9.07558C25.3827 9.41196 25.4256 9.76872 25.6387 10.0453C26.0728 10.6357 26.894 10.7655 27.3312 11.3537C26.9766 11.676 26.4979 11.4247 26.0879 11.3994C25.8684 11.3605 25.8067 11.6223 25.7163 11.7661C25.578 11.9898 25.5644 12.2584 25.667 12.4983C25.7552 12.6463 25.5516 12.7099 25.4812 12.805C24.7249 13.5626 24.2165 14.5147 23.5806 15.3651C23.0808 16.055 22.4997 16.6925 21.8196 17.2115C20.6547 18.1022 19.3602 18.8314 17.9817 19.3436C16.6835 19.8331 15.2891 19.9761 13.9142 20.0855C12.3285 20.1913 10.7355 20.199 9.14977 20.0869C8.04327 19.9968 6.92899 19.8717 5.86562 19.5425C5.43337 19.4006 4.98221 19.2337 4.67457 18.8852C4.21729 18.3766 3.97084 17.7237 3.79505 17.0754C3.44263 15.6748 3.39701 14.2042 3.59701 12.7782C3.68963 12.1041 4.02369 11.501 4.34329 10.9107C4.49794 10.6646 4.41589 10.3599 4.51129 10.0982C4.56776 9.9467 4.75635 10.0318 4.87539 10.0205C5.16022 10.6222 4.98916 11.314 5.19638 11.9325C6.3051 13.0256 7.85942 13.5576 9.3862 13.7485C11.5936 14.0053 13.8216 13.6675 15.9665 13.1521C19.0462 12.3881 22.0076 11.2195 24.8787 9.89022C24.8851 9.66156 24.839 9.40479 24.9783 9.20534Z"
                fill="#0D0D0D"
              />
              <path
                d="M14.9077 10.6489C14.927 10.2254 15.3375 10.0444 15.6649 10.0911C16.0779 10.145 16.5278 10.2668 16.8281 10.612C16.9241 10.8809 16.8907 11.188 16.8855 11.4725C16.8461 11.887 16.7218 12.3856 16.3487 12.5642C16.1722 12.661 15.9824 12.5621 15.8093 12.5064C15.8093 12.3765 15.7847 12.2383 15.8388 12.1175C15.9403 11.8705 16.215 11.7752 16.2933 11.5115C16.3547 11.3276 16.2986 11.1346 16.2685 10.9513C15.8301 10.7616 15.3361 10.8757 14.9077 10.6489Z"
                fill="#0D0D0D"
              />
              <path
                d="M16.9468 10.5762C16.8871 10.4092 16.8364 10.1606 17.0531 10.0839C17.1102 10.0997 17.2228 10.1297 17.2793 10.1458C17.2034 10.2011 17.1274 10.2555 17.0512 10.3103C17.0662 10.5113 17.2196 10.6776 17.4223 10.7197C18.1638 10.8978 18.9357 10.6603 19.6808 10.7914C19.8442 10.806 19.8965 10.9507 19.8703 11.0923C19.1833 10.7219 18.3811 11.0172 17.6443 10.9492C17.3779 10.9325 17.0416 10.8533 16.9468 10.5762Z"
                fill="#0D0D0D"
              />
              <path
                d="M1.98756 10.5883C2.02157 10.5998 2.09067 10.6232 2.12522 10.6351C2.30822 10.8367 2.70905 10.9325 2.98139 11.0925C2.7409 11.0767 2.48313 11.0529 2.29986 10.9597C2.10039 10.867 2.03264 10.722 1.98756 10.5883Z"
                fill="#0D0D0D"
              />
              <path
                d="M22.4212 11.8642C23.4301 11.5224 24.2384 10.6353 25.3429 10.5883C25.3601 11.198 25.0825 11.792 24.6315 12.1866C24.0033 12.7463 23.1737 12.9943 22.3622 13.1092C22.5608 12.7162 22.3587 12.2791 22.4212 11.8642Z"
                fill="#FCFCFC"
              />
              <path
                d="M29.6672 10.5883C29.7168 10.6447 29.7661 10.7019 29.8153 10.7583C29.722 11.2938 29.6083 11.8269 29.4523 12.3517C28.9178 12.6222 28.4198 12.9794 27.7991 13.0931C27.6404 13.1351 27.4826 13.0863 27.3307 13.0487C27.9269 12.9659 28.5334 12.7688 28.9274 12.3614C29.4072 11.8674 29.6152 11.2186 29.6672 10.5883Z"
                fill="#0D0D0D"
              />
              <path
                d="M13.5146 11.188C14.1331 11.0169 14.7935 11.0916 15.398 11.2852C15.4186 11.5661 15.3974 11.8555 15.2492 12.1008C14.5837 11.4923 13.665 12.1546 12.9201 11.7957C12.9582 11.4809 13.2268 11.2613 13.5146 11.188Z"
                fill="#0D0D0D"
              />
              <path
                d="M17.3929 13.2141C18.8925 12.8722 20.3506 12.3946 21.8652 12.1008C21.8558 12.6803 21.5415 13.256 20.9792 13.5654C19.9922 14.1219 18.7788 14.181 17.7335 14.6218C17.6016 14.156 17.5345 13.6776 17.3929 13.2141Z"
                fill="#FCFCFC"
              />
              <path
                d="M4.47351 14.3966C4.48649 13.7373 4.90427 13.1356 5.35136 12.6051C5.62221 13.4399 5.36308 14.3138 5.09182 15.1261C4.73934 14.997 4.45007 14.7292 4.47351 14.3966Z"
                fill="#FCFCFC"
              />
              <path
                d="M23.1424 13.9773C23.5112 13.7671 23.9271 13.6436 24.3498 13.6134C23.6362 14.1948 23.4651 15.3153 22.5203 15.6302C22.412 15.3912 22.321 15.128 22.3816 14.8626C22.4686 14.4624 22.7994 14.1709 23.1424 13.9773Z"
                fill="#FCFCFC"
              />
              <path
                d="M6.15058 15.4243C6.06815 14.8386 5.70174 14.0742 6.29597 13.6134C6.60818 13.8975 7.02716 14.0382 7.44906 14.131C7.49547 14.4934 7.20403 14.7781 7.08752 15.104C7.02034 15.2865 7.1216 15.4664 7.20079 15.6302C6.86164 15.5226 6.52347 15.3474 6.15058 15.4243Z"
                fill="#FCFCFC"
              />
              <path
                d="M14.2076 14.2131C15.1595 13.9876 16.1132 13.766 17.0795 13.6134C17.2167 14.1007 17.2633 14.6094 17.3927 15.098C16.651 15.182 15.9479 15.4676 15.2111 15.5777C14.7823 15.6463 14.3466 15.6396 13.9156 15.6039C13.92 15.171 13.9079 14.739 13.9192 14.3066C13.9998 14.2422 14.1126 14.2442 14.2076 14.2131Z"
                fill="#FCFCFC"
              />
              <path
                d="M7.45384 15.309C7.80992 14.9885 7.59895 14.4604 7.91175 14.1176C8.68818 14.5187 9.61991 14.2837 10.4355 14.5625C10.1494 14.8627 10.3785 15.275 10.3327 15.6302C9.36757 15.6281 8.36393 15.656 7.45384 15.309Z"
                fill="#FCFCFC"
              />
              <path
                d="M11.1224 14.3397C11.731 14.4524 12.3135 14.1193 12.9183 14.1176C12.9214 14.6208 12.919 15.125 12.9202 15.6282C12.2628 15.6299 11.6061 15.6322 10.949 15.6272C10.8627 15.166 11.1455 14.7945 11.1224 14.3397Z"
                fill="#FCFCFC"
              />
              <path
                d="M18.4042 15.9122C19.4602 15.6378 20.454 15.1532 21.4157 14.6218C21.328 15.1952 21.4513 15.8169 21.8648 16.2177C20.8918 16.8199 20.052 17.6517 19.0224 18.1512C19.0097 17.4957 18.4587 17.0495 18.3981 16.4103C18.3744 16.2442 18.392 16.0775 18.4042 15.9122Z"
                fill="#FCFCFC"
              />
              <path
                d="M14.4379 17.0591C15.5721 16.9233 16.6425 16.5234 17.7012 16.1343C17.6727 16.4942 17.6647 16.8728 17.8404 17.2037C18.0437 17.6031 18.3269 17.9771 18.3861 18.4289C17.3917 18.6601 16.437 19.0576 15.4095 19.1468C15.0956 19.1819 14.7795 19.1398 14.4737 19.0749C14.5994 18.4054 14.3267 17.7326 14.4379 17.0591Z"
                fill="#FCFCFC"
              />
              <path
                d="M4.51166 17.0437C4.46023 16.9172 4.46764 16.7736 4.48594 16.6386C4.60645 16.9915 4.81499 17.2842 4.93507 17.6373C4.9987 17.8036 4.96579 17.9905 4.9087 18.1512C4.84136 17.7481 4.64502 17.4124 4.51166 17.0437Z"
                fill="#FCFCFC"
              />
              <path
                d="M5.88564 17.143C6.43889 17.6754 6.72926 18.4264 6.95698 19.1598C6.52661 19.0434 6.07362 18.9908 5.67138 18.7841C5.55095 18.7306 5.51335 18.5927 5.46628 18.4796C5.53199 18.5402 5.59618 18.6017 5.66037 18.6652C5.79822 18.6248 5.95931 18.6091 6.05712 18.4844C6.21514 18.0103 5.59557 17.5959 5.88564 17.143Z"
                fill="#FCFCFC"
              />
              <path
                d="M10.9326 17.5062C11.892 17.5918 12.8551 17.4281 13.7718 17.143C13.82 17.9213 13.5928 18.7477 13.914 19.4867C13.0656 19.7759 12.1603 19.6179 11.2847 19.6437C11.1978 18.9258 11.0275 18.2224 10.9326 17.5062Z"
                fill="#FCFCFC"
              />
              <path
                d="M6.95679 17.6485C7.32038 17.6252 7.62181 17.882 7.99087 17.8289C7.97214 18.3164 8.3529 18.6972 8.44757 19.1596C8.10322 19.1136 7.73781 19.0995 7.4382 18.9179C7.47747 18.8038 7.54665 18.68 7.48345 18.5609C7.36147 18.2318 7.0707 17.9822 6.95679 17.6485Z"
                fill="#FCFCFC"
              />
              <path
                d="M8.94499 17.7477C9.4057 17.6257 9.94114 17.555 10.3445 17.896C10.8044 18.3178 10.8642 19.0383 10.9327 19.6576C10.4726 19.6791 10.0065 19.6506 9.56695 19.4813C9.44347 18.8669 9.11079 18.3448 8.94499 17.7477Z"
                fill="#FCFCFC"
              />
              <path
                d="M20.387 19.4991C21.1749 19.123 21.9856 18.7394 22.8585 18.6553C21.4496 19.1809 20.1461 19.9548 18.7921 20.609C17.0422 21.4598 15.152 22.1729 13.1936 22.0847C12.4714 21.996 11.7517 22.1517 11.0281 22.1441C9.63809 22.127 8.23143 22.3065 6.85435 22.0239C6.28431 21.8952 5.69002 21.6672 5.31863 21.1725C5.12646 20.9348 5.02643 20.6363 4.96922 20.3355C5.46995 21.2125 6.4252 21.632 7.34043 21.8485C8.47799 22.1012 9.65331 22.1849 10.8131 22.0788C12.3683 22.0095 13.9437 22.0239 15.4668 21.6411C17.2051 21.2004 18.7834 20.2964 20.387 19.4991Z"
                fill="#0D0D0D"
              />
              <path
                d="M21.9137 19.6512C22.6946 19.253 23.4582 18.7247 24.3496 18.6553C23.3814 19.3299 22.3264 19.8619 21.2655 20.3623C17.0892 22.2795 12.509 23.1875 7.94803 23.1927C7.04023 23.1979 6.1149 23.1587 5.24217 22.8757C4.54978 22.6514 3.90274 22.2012 3.53734 21.541C3.52649 21.2623 3.41907 20.9534 3.5251 20.6897C3.56072 20.6684 3.63196 20.6263 3.66758 20.6047C3.67482 20.9439 3.66981 21.2836 3.6712 21.6228C4.06443 22.0333 4.56091 22.3229 5.0841 22.5176C5.88698 22.8233 6.7419 22.9457 7.59098 23.0099C8.9254 23.0931 10.2634 23.0076 11.5915 22.8625C15.1862 22.4718 18.6899 21.33 21.9137 19.6512Z"
                fill="#0D0D0D"
              />
              <path
                d="M8.94499 20.7701C9.94023 20.7911 10.936 20.7314 11.9296 20.8149C12.5865 20.8183 13.2943 20.357 13.9143 21.0753C12.8312 20.9593 11.7493 21.171 10.6659 21.1764C10.0916 21.1384 9.50111 21.1744 8.94499 20.7701Z"
                fill="#0D0D0D"
              />
              <path
                d="M43.436 7.53444L47.1292 15.5432L50.8224 7.53444H54.2043V21H51.7353V10.7712L47.9176 19.5269H46.32L42.3779 10.4807V21H39.9296V7.53444H43.436ZM63.0228 12.1198C63.3686 12.5624 63.6245 13.0742 63.7905 13.6552C63.9703 14.2361 64.0602 14.7686 64.0602 15.2528C64.0602 15.7369 64.0325 16.1726 63.9772 16.5599H57.4623C57.4899 17.376 57.6905 18.0399 58.064 18.5517C58.4374 19.0635 59.0045 19.3194 59.7653 19.3194C60.7751 19.3194 61.3768 18.8768 61.5704 17.9915H64.0394C63.8734 19.0013 63.4101 19.7966 62.6493 20.3776C61.8609 20.9862 60.8995 21.2905 59.7653 21.2905C58.4374 21.2905 57.3239 20.8064 56.4249 19.8381C55.4981 18.8284 55.0347 17.5351 55.0347 15.9582C55.0347 14.3398 55.4981 13.0396 56.4249 12.0575C57.3101 11.117 58.4236 10.6467 59.7653 10.6467C61.1624 10.6467 62.2482 11.1377 63.0228 12.1198ZM59.7861 12.597C59.0945 12.597 58.555 12.8252 58.1677 13.2817C57.7804 13.7243 57.5522 14.2983 57.483 15.0038H61.7779C61.7779 13.911 61.4321 13.1779 60.7405 12.8045C60.4777 12.6662 60.1595 12.597 59.7861 12.597ZM73.8797 12.8252C74.5298 11.3729 75.671 10.6467 77.3032 10.6467C78.5066 10.6467 79.4402 11.0547 80.1042 11.8708C80.7405 12.6454 81.0586 13.7243 81.0586 15.1075V21H78.5896V15.1075C78.5896 14.3606 78.4097 13.8004 78.0501 13.4269C77.6905 13.0396 77.1856 12.846 76.5355 12.846C75.8854 12.846 75.3529 13.1295 74.9379 13.6966C74.5229 14.2638 74.3016 15.1214 74.2739 16.2694V21H71.8257V15.1075C71.8257 14.3606 71.6458 13.8004 71.2862 13.4269C70.9266 13.0396 70.4217 12.846 69.7716 12.846C69.1215 12.846 68.5613 13.1364 68.091 13.7174C67.6345 14.2983 67.3925 15.1698 67.3648 16.3317V21H64.9165V10.9164H67.0536L67.3233 12.6592C67.9873 11.3175 69.0523 10.6467 70.5185 10.6467C71.3623 10.6467 72.0608 10.8403 72.6141 11.2276C73.1812 11.6149 73.6031 12.1474 73.8797 12.8252ZM89.5699 12.1198C89.9157 12.5624 90.1716 13.0742 90.3376 13.6552C90.5174 14.2361 90.6073 14.7686 90.6073 15.2528C90.6073 15.7369 90.5796 16.1726 90.5243 16.5599H84.0094C84.037 17.376 84.2376 18.0399 84.6111 18.5517C84.9845 19.0635 85.5517 19.3194 86.3124 19.3194C87.3222 19.3194 87.9239 18.8768 88.1175 17.9915H90.5865C90.4206 19.0013 89.9572 19.7966 89.1964 20.3776C88.408 20.9862 87.4467 21.2905 86.3124 21.2905C84.9845 21.2905 83.8711 20.8064 82.972 19.8381C82.0452 18.8284 81.5818 17.5351 81.5818 15.9582C81.5818 14.3398 82.0452 13.0396 82.972 12.0575C83.8572 11.117 84.9707 10.6467 86.3124 10.6467C87.7095 10.6467 88.7953 11.1377 89.5699 12.1198ZM86.3332 12.597C85.6416 12.597 85.1021 12.8252 84.7148 13.2817C84.3275 13.7243 84.0993 14.2983 84.0301 15.0038H88.325C88.325 13.911 87.9792 13.1779 87.2876 12.8045C87.0248 12.6662 86.7066 12.597 86.3332 12.597ZM102.894 18.8629C102.313 20.4813 101.2 21.2905 99.554 21.2905C97.8664 21.2905 96.4763 20.6542 95.3836 19.3816C94.2494 18.0676 93.6822 16.387 93.6822 14.3398C93.6822 12.182 94.2908 10.453 95.5081 9.1528C96.6838 7.89408 98.1984 7.26471 100.052 7.26471C101.311 7.26471 102.362 7.54136 103.206 8.09464C104.063 8.63409 104.734 9.49169 105.218 10.6674L102.708 11.2484C101.975 10.0726 101.048 9.48477 99.9274 9.48477C98.9039 9.48477 98.0532 9.92048 97.3754 10.7919C96.67 11.6772 96.3173 12.8598 96.3173 14.3398C96.3173 15.7369 96.6354 16.8711 97.2717 17.7425C97.8941 18.6001 98.724 19.0289 99.7614 19.0289C100.647 19.0289 101.373 18.7454 101.94 18.1782C102.521 17.5973 102.811 16.802 102.811 15.7922V15.7092L99.7822 15.647V14.0701H105.156V21H103.164L102.894 18.8629ZM113.637 12.1198C113.983 12.5624 114.239 13.0742 114.405 13.6552C114.584 14.2361 114.674 14.7686 114.674 15.2528C114.674 15.7369 114.647 16.1726 114.591 16.5599H108.076C108.104 17.376 108.305 18.0399 108.678 18.5517C109.052 19.0635 109.619 19.3194 110.379 19.3194C111.389 19.3194 111.991 18.8768 112.185 17.9915H114.654C114.488 19.0013 114.024 19.7966 113.263 20.3776C112.475 20.9862 111.514 21.2905 110.379 21.2905C109.052 21.2905 107.938 20.8064 107.039 19.8381C106.112 18.8284 105.649 17.5351 105.649 15.9582C105.649 14.3398 106.112 13.0396 107.039 12.0575C107.924 11.117 109.038 10.6467 110.379 10.6467C111.777 10.6467 112.862 11.1377 113.637 12.1198ZM110.4 12.597C109.709 12.597 109.169 12.8252 108.782 13.2817C108.395 13.7243 108.166 14.2983 108.097 15.0038H112.392C112.392 13.911 112.046 13.1779 111.355 12.8045C111.092 12.6662 110.774 12.597 110.4 12.597ZM117.937 12.6592C118.601 11.3175 119.666 10.6467 121.133 10.6467C122.378 10.6467 123.311 11.0547 123.934 11.8708C124.57 12.6869 124.888 13.7658 124.888 15.1075V21H122.44V15.1075C122.44 14.3606 122.26 13.8004 121.9 13.4269C121.541 13.0396 121.036 12.846 120.386 12.846C119.736 12.846 119.175 13.1364 118.705 13.7174C118.249 14.2983 118.007 15.1698 117.979 16.3317V21H115.531V10.9164H117.668L117.937 12.6592ZM133.417 12.1198C133.762 12.5624 134.018 13.0742 134.184 13.6552C134.364 14.2361 134.454 14.7686 134.454 15.2528C134.454 15.7369 134.426 16.1726 134.371 16.5599H127.856C127.884 17.376 128.084 18.0399 128.458 18.5517C128.831 19.0635 129.398 19.3194 130.159 19.3194C131.169 19.3194 131.771 18.8768 131.964 17.9915H134.433C134.267 19.0013 133.804 19.7966 133.043 20.3776C132.255 20.9862 131.293 21.2905 130.159 21.2905C128.831 21.2905 127.718 20.8064 126.819 19.8381C125.892 18.8284 125.429 17.5351 125.429 15.9582C125.429 14.3398 125.892 13.0396 126.819 12.0575C127.704 11.117 128.817 10.6467 130.159 10.6467C131.556 10.6467 132.642 11.1377 133.417 12.1198ZM130.18 12.597C129.488 12.597 128.949 12.8252 128.562 13.2817C128.174 13.7243 127.946 14.2983 127.877 15.0038H132.172C132.172 13.911 131.826 13.1779 131.134 12.8045C130.871 12.6662 130.553 12.597 130.18 12.597ZM137.759 12.9082C138.367 11.4558 139.28 10.7297 140.497 10.7297C140.733 10.7297 141.03 10.7781 141.39 10.8749L141.348 13.3232C140.961 13.2402 140.58 13.1987 140.207 13.1987C138.575 13.1987 137.759 14.326 137.759 16.5806V21H135.31V10.8956H137.759V12.9082ZM145.187 15.1075C145.989 15.1075 146.916 15.2389 147.967 15.5017V14.5058C147.967 13.8004 147.822 13.2817 147.531 12.9497C147.255 12.6039 146.791 12.431 146.141 12.431C145.505 12.431 145.014 12.5624 144.668 12.8252C144.322 13.0742 144.149 13.4338 144.149 13.9041H141.473C141.473 12.7561 141.874 11.9261 142.676 11.4143C143.492 10.9026 144.627 10.6467 146.079 10.6467C148.154 10.6467 149.496 11.3729 150.104 12.8252C150.312 13.3232 150.415 13.911 150.415 14.5888V21H148.278L148.092 19.6514C147.441 20.7441 146.446 21.2905 145.104 21.2905C143.804 21.2905 142.794 20.9723 142.075 20.3361C141.411 19.7274 141.079 18.9598 141.079 18.033C141.079 17.0924 141.445 16.3732 142.178 15.8752C142.911 15.3634 143.914 15.1075 145.187 15.1075ZM147.967 17.0578C147.151 16.8365 146.39 16.7259 145.685 16.7259C144.357 16.7259 143.693 17.1685 143.693 18.0538C143.693 18.4272 143.845 18.7523 144.149 19.0289C144.454 19.2917 144.938 19.4231 145.602 19.4231C146.28 19.4231 146.833 19.2018 147.262 18.7592C147.704 18.3027 147.939 17.7356 147.967 17.0578ZM157.594 20.751C156.681 21.1107 155.962 21.2905 155.436 21.2905C154.91 21.2905 154.447 21.2282 154.046 21.1037C153.659 20.9793 153.313 20.7925 153.009 20.5435C152.372 19.9764 152.054 19.1949 152.054 18.199V12.5555H150.643V10.9164H152.054V8.26063H154.502V10.9164H157.241V12.5555H154.502V18.116C154.502 18.9459 154.897 19.3609 155.685 19.3609C156.086 19.3609 156.605 19.2502 157.241 19.0289L157.594 20.751ZM161.983 10.6467C162.661 10.6467 163.297 10.7573 163.892 10.9786C164.486 11.1861 164.998 11.5112 165.427 11.9538C166.381 12.922 166.859 14.2638 166.859 15.9789C166.859 17.6665 166.381 18.9943 165.427 19.9626C164.569 20.8478 163.421 21.2905 161.983 21.2905C160.544 21.2905 159.382 20.8478 158.497 19.9626C157.543 19.0082 157.065 17.6803 157.065 15.9789C157.065 14.2499 157.543 12.9082 158.497 11.9538C159.368 11.0824 160.53 10.6467 161.983 10.6467ZM164.41 15.9582C164.41 14.8931 164.203 14.0978 163.788 13.5722C163.373 13.0327 162.792 12.763 162.045 12.763C161.312 12.763 160.71 13.0327 160.24 13.5722C159.77 14.0978 159.534 14.8931 159.534 15.9582C159.534 17.0233 159.742 17.8255 160.157 18.365C160.586 18.8906 161.167 19.1534 161.9 19.1534C162.633 19.1534 163.235 18.8906 163.705 18.365C164.175 17.8255 164.41 17.0233 164.41 15.9582ZM170.145 12.9082C170.754 11.4558 171.667 10.7297 172.884 10.7297C173.119 10.7297 173.417 10.7781 173.776 10.8749L173.735 13.3232C173.347 13.2402 172.967 13.1987 172.594 13.1987C170.961 13.1987 170.145 14.326 170.145 16.5806V21H167.697V10.8956H170.145V12.9082Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        <div>React Course - Project 3</div>
      </header>
      <div className="app_body">
        <Form_generator />
      </div>
    </div>
  );
}

export default App;
