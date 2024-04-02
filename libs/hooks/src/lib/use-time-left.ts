'use client';

import { useCallback, useEffect, useState } from 'react';

export const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
export const DAY = HOUR * 24;
const ONE_WEEK = 7 * DAY;

export interface ILeftDays {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  endDate?: Date;
  isValid: boolean;
  noTime?: boolean;
}

export const formatTimeLeftItem = (v: number, isValid: boolean) => {
  return v < 0 || !isValid ? '--' : v >= 10 ? v : `0${v}`;
};

export const DEFAULT: ILeftDays = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isValid: false,
  noTime: false,
};

export const getDates = (date: Date) => {
  const diff = date.getTime() - new Date().getTime();

  const days = Math.max(0, Math.floor(diff / DAY));

  const hours = Math.max(0, Math.floor((diff - days * DAY) / HOUR));

  const minutes = Math.max(
    0,
    Math.floor((diff - days * DAY - hours * HOUR) / MINUTE),
  );

  const seconds = Math.max(
    0,
    Math.floor((diff - days * DAY - hours * HOUR - minutes * MINUTE) / SECOND),
  );

  return {
    days,
    hours,
    minutes,
    seconds,
    isValid: days >= 0 && hours >= 0 && minutes >= 0 && seconds >= 0,
    noTime:
      diff < 0 || (days === 0 && hours === 0 && minutes === 0 && seconds === 0),
  };
};

export const useTimeLeft = (endDate: string) => {
  const [border, setBorder] = useState<ILeftDays>(DEFAULT);

  const calculateBorder = useCallback((): ILeftDays => {
    const date = new Date(endDate);

    return getDates(date);
  }, [endDate]);

  useEffect(() => {
    if (!endDate) {
      return;
    }

    const intervalId = setInterval(() => {
      setBorder(calculateBorder());
    }, SECOND);

    return () => {
      return clearInterval(intervalId);
    };
  }, [calculateBorder, endDate]);

  const { days, hours, minutes } = border;

  const isValid = days >= 0 && hours >= 0 && minutes >= 0;

  return {
    isValid,
    days,
    hours,
    minutes,
  };
};
