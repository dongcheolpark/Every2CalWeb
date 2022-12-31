import everytime

__author__ = "Hoseong Son <me@sookcha.com>"

import argparse
import os

from convert import Convert


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--id", type=str, help="Everytime timetable id", required=False)
    parser.add_argument("--xml", type=str, help="Location of timetable xml file", required=False)
    parser.add_argument("--begin", type=str, help="Semester beginning date", required=True)
    parser.add_argument("--end", type=str, help="Semester ending date", required=True)
    parser.add_argument("--output", type=str, help="Output file path", required=False)
    args = parser.parse_args()

    xml = ""
    if (args.xml):
        xml = args.xml
    else:
        path = args.id if (args.id) else input('경로 : ')

        e = everytime.Everytime(path)
        xml = e.get_timetable()

    c = Convert(xml)
    cal = c.get_calendar(c.get_subjects(), args.begin, args.end)
    output_path = args.output if (args.output) else os.path.join('', 'calendar.ics')
    print(cal.to_ical().decode("utf-8").replace('\r\n', '\n').strip())



if __name__ == '__main__':
    main()
